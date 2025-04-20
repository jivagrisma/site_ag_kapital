"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { professionals, categories } from "@/lib/professionals";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Professional = {
  id: number;
  name: string;
  avatar: string;
  title: string;
  rating: number;
  reviews: number;
  skills: string[];
  hourlyRate: number;
  availability: string;
  category: string;
};

export default function FeaturedProfessionalsFiltered() {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [currentPage, setCurrentPage] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [featuredProfessionals, setFeaturedProfessionals] = useState<Professional[]>([]);
  
  const cardsPerPage = 3;

  // Seleccionar profesionales destacados de diferentes categorías
  useEffect(() => {
    // Función para seleccionar profesionales destacados
    const selectFeaturedProfessionals = () => {
      try {
        // Obtener un profesional de cada categoría principal para diversidad
        const categoryMap = new Map<string, Professional>();
        const uniqueCategories = Array.from(new Set(professionals.map((p) => p.category)));

        // Seleccionar el mejor profesional de cada categoría
        uniqueCategories.forEach((category) => {
          const profsInCategory = professionals.filter((p) => p.category === category);
          const bestProf = profsInCategory.reduce(
            (best, current) => (current.rating > best.rating ? current : best),
            profsInCategory[0]
          );
          categoryMap.set(category, bestProf);
        });

        // Convertir el mapa a array
        const featured = Array.from(categoryMap.values());

        // Mezclar el array para aleatorizar el orden
        const shuffled = [...featured].sort(() => 0.5 - Math.random());

        return shuffled;
      } catch (error) {
        console.error("Error al seleccionar profesionales destacados:", error);
        // Fallback: usar los primeros profesionales
        return professionals.slice(0, 5);
      }
    };

    // Solo actualizar si featuredProfessionals está vacío
    if (featuredProfessionals.length === 0) {
      setFeaturedProfessionals(selectFeaturedProfessionals());
    }
  }, [featuredProfessionals.length]);

  const filteredProfessionals = useMemo(() => {
    return selectedCategory === "All categories"
      ? professionals
      : professionals.filter((pro) => pro.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [selectedCategory]);

  const totalPages = Math.ceil(featuredProfessionals.length / cardsPerPage);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  const currentPageItems = useMemo(() => {
    if (featuredProfessionals.length === 0) {
      return professionals.slice(0, cardsPerPage);
    }
    const startIndex = currentPage * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, featuredProfessionals.length);
    return featuredProfessionals.slice(startIndex, endIndex);
  }, [currentPage, featuredProfessionals, cardsPerPage]);

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const ProfessionalCard = ({ professional }: { professional: Professional }) => (
    <div className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48">
        <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          {professional.availability}
        </div>
        {imageErrors[professional.id] ? (
          <div className="h-full w-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
            <span className="text-lg font-medium text-slate-500 dark:text-slate-400">
              {professional.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        ) : (
          <Image
            src={professional.avatar}
            alt={professional.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            onError={() => handleImageError(professional.id)}
          />
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-xl">{professional.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="font-medium">{professional.rating}</span>
          </div>
        </div>
        <div className="text-sm text-muted-foreground mb-2">({professional.reviews} reviews)</div>
        <p className="text-sm mb-4">{professional.title}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {professional.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t">
          <div className="flex justify-between items-center">
            <div className="font-semibold">Starting at ${professional.hourlyRate}/hour</div>
            <Button variant="outline" size="sm">
              View profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Featured professionals</h2>
            <p className="text-xl text-muted-foreground">
              Connect with our top-notch professionals who consistently deliver exceptional results for their clients.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-4 gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="whitespace-nowrap"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {selectedCategory === "All categories" ? (
            <div className="relative">
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-6 md:grid-cols-3"
                  >
                    {currentPageItems.map((professional) => (
                      <motion.div key={professional.id} variants={item}>
                        <ProfessionalCard professional={professional} />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel controls */}
              <div className="flex justify-between items-center mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={prevPage}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </Button>

                <div className="flex gap-2 justify-center">
                  <Button variant="outline" className="w-full">
                    View All Professionals
                  </Button>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={nextPage}
                  aria-label="Next page"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          ) : (
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredProfessionals.map((professional) => (
                <motion.div key={professional.id} variants={item}>
                  <ProfessionalCard professional={professional} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {selectedCategory !== "All categories" && filteredProfessionals.length > 0 && (
            <div className="flex justify-center mt-6">
              <Button variant="outline">View All Professionals</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
