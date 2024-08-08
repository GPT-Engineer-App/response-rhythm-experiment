import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const CatBreed = ({ name, description, image }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds, known for their intelligence and playful personality.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
    { name: "Persian", description: "Recognized for their long fur and flat faces.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
    { name: "Bengal", description: "Known for their wild appearance and energetic personality.", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
    { name: "Sphynx", description: "Distinctive for their lack of fur and wrinkled skin.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg" },
  ];

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
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold text-white text-center"
          >
            Discover the World of Cats
          </motion.h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About Cats</TabsTrigger>
            <TabsTrigger value="breeds">Cat Breeds</TabsTrigger>
            <TabsTrigger value="facts">Fun Facts</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Cats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-gray-700">
                  Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their
                  independence, agility, and affectionate nature. Cats come in various breeds, each with its unique
                  characteristics and personalities.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {catBreeds.map((breed, index) => (
                  <CarouselItem key={index}>
                    <CatBreed {...breed} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          <TabsContent value="facts">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Cats sleep for 70% of their lives</AccordionTrigger>
                <AccordionContent>
                  On average, cats sleep for about 13 to 16 hours a day. This means they spend about 70% of their lives sleeping!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Cats have a third eyelid</AccordionTrigger>
                <AccordionContent>
                  Cats have a third eyelid called the nictitating membrane. It's a thin cover that helps keep the eye moist and protected.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>A group of cats is called a clowder</AccordionTrigger>
                <AccordionContent>
                  While we often think of groups of animals in terms like herds or packs, a group of cats is called a clowder.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Subscribe to Our Cat Newsletter</CardTitle>
            <CardDescription>Get the latest cat facts and news delivered to your inbox!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
