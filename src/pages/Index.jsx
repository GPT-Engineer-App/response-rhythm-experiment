import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Paw, Heart, Star } from "lucide-react";

const CatBreed = ({ name, description, image }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card className="h-full overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Paw className="w-5 h-5 mr-2 text-purple-500" />
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-110" />
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

const Index = () => {
  const [email, setEmail] = useState("");
  const [activeBreed, setActiveBreed] = useState(0);
  const { toast } = useToast();

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds, known for their intelligence and playful personality.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
    { name: "Persian", description: "Recognized for their long fur and flat faces.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
    { name: "Bengal", description: "Known for their wild appearance and energetic personality.", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
    { name: "Sphynx", description: "Distinctive for their lack of fur and wrinkled skin.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBreed((prev) => (prev + 1) % catBreeds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: `You've been added to our newsletter with email: ${email}`,
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="relative h-[60vh] bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl font-bold text-white text-center"
          >
            Discover the World of Cats
          </motion.h1>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="about" className="text-lg">About Cats</TabsTrigger>
            <TabsTrigger value="breeds" className="text-lg">Cat Breeds</TabsTrigger>
            <TabsTrigger value="facts" className="text-lg">Fun Facts</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center">
                    <Heart className="w-8 h-8 mr-2 text-red-500" />
                    About Cats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
                    independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
                    characteristics and personalities. These elegant felines have captured the hearts of millions around the world
                    with their playful antics, soothing purrs, and loyal companionship.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="breeds">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                  {catBreeds.map((breed, index) => (
                    <CarouselItem key={index}>
                      <AnimatePresence>
                        {activeBreed === index && (
                          <motion.div
                            key={breed.name}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <CatBreed {...breed} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </motion.div>
          </TabsContent>
          <TabsContent value="facts">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    Cats sleep for 70% of their lives
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    On average, cats sleep for about 13 to 16 hours a day. This means they spend about 70% of their lives sleeping!
                    This extensive sleep helps them conserve energy for hunting and playing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    Cats have a third eyelid
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Cats have a third eyelid called the nictitating membrane. It's a thin cover that helps keep the eye moist and protected.
                    This membrane also helps clear debris from the eye and produces mucus that contributes to tear production.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    A group of cats is called a clowder
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    While we often think of groups of animals in terms like herds or packs, a group of cats is called a clowder.
                    This term has been used since the 15th century and is believed to come from the word "clodder," meaning to clot or mass together.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mt-16 bg-gradient-to-r from-purple-200 to-pink-200">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <Paw className="w-8 h-8 mr-2 text-purple-500" />
                Subscribe to Our Cat Newsletter
              </CardTitle>
              <CardDescription className="text-lg">Get the latest cat facts and news delivered to your inbox!</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow text-lg"
                />
                <Button type="submit" className="bg-purple-500 hover:bg-purple-600 text-lg">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
