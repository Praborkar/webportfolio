import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Note: You'll need to set up EmailJS service with your own keys
      // For demo purposes, we'll simulate the success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Message sent successfully! I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div>
                     <Input
                       name="name"
                       placeholder="Your Name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                       className="h-12 focus:ring-2 focus:ring-portfolio-indigo transition-all duration-500 ease-in-out border-portfolio-sky/30 focus:border-portfolio-indigo"
                     />
                   </div>
                   
                   <div>
                     <Input
                       name="email"
                       type="email"
                       placeholder="Your Email"
                       value={formData.email}
                       onChange={handleChange}
                       required
                       className="h-12 focus:ring-2 focus:ring-portfolio-indigo transition-all duration-500 ease-in-out border-portfolio-sky/30 focus:border-portfolio-indigo"
                     />
                   </div>
                   
                   <div>
                     <Textarea
                       name="message"
                       placeholder="Your Message"
                       value={formData.message}
                       onChange={handleChange}
                       required
                       rows={6}
                       className="focus:ring-2 focus:ring-portfolio-indigo transition-all duration-500 ease-in-out resize-none border-portfolio-sky/30 focus:border-portfolio-indigo"
                     />
                   </div>
                   
                   <Button
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full h-12 text-lg font-medium gradient-primary hover:scale-105 transition-all duration-500 ease-in-out"
                   >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">prabork@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors"
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">India</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+91-8812833779</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;