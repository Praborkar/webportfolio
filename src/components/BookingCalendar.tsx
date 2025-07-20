
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarClock, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';

const availableTimeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM'
];

const eventTypes = [
  'Concert', 'Corporate Event', 'Wedding', 'Birthday Party',
  'Festival', 'Conference', 'Club Night', 'Private Party',
  'Other'
];

const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [eventType, setEventType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    details: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !eventType) {
      toast({
        title: "Missing information",
        description: "Please select a date, time slot, and event type",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to your backend
    console.log({
      date: date ? format(date, 'yyyy-MM-dd') : '',
      timeSlot,
      eventType,
      ...formData
    });

    toast({
      title: "Booking request submitted!",
      description: `We'll contact you soon to confirm your ${eventType} on ${format(date, 'MMMM dd, yyyy')} at ${timeSlot}.`,
    });

    // Reset form
    setDate(undefined);
    setTimeSlot('');
    setEventType('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      details: ''
    });
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="glassmorphism p-6 animate-fade-in">
        <div className="flex items-center space-x-2 mb-4">
          <CalendarClock className="h-5 w-5 text-psyco-green-DEFAULT" />
          <h3 className="text-xl font-medium">Select Date & Time</h3>
        </div>
        
        <div className="calendar-container pointer-events-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 6))}
            className="rounded-md border border-psyco-green-muted/50 bg-psyco-black-card"
          />
        </div>
        
        <div className="mt-6">
          <label className="block text-gray-300 mb-2">Select Time Slot</label>
          <Select value={timeSlot} onValueChange={setTimeSlot}>
            <SelectTrigger className="bg-psyco-black-DEFAULT border-psyco-green-muted/50">
              <SelectValue placeholder="Select a time slot" />
            </SelectTrigger>
            <SelectContent className="bg-psyco-black-light border-psyco-green-muted/50">
              {availableTimeSlots.map(time => (
                <SelectItem key={time} value={time}>{time}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="mt-4">
          <label className="block text-gray-300 mb-2">Event Type</label>
          <Select value={eventType} onValueChange={setEventType}>
            <SelectTrigger className="bg-psyco-black-DEFAULT border-psyco-green-muted/50">
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent className="bg-psyco-black-light border-psyco-green-muted/50">
              {eventTypes.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="glassmorphism p-6 animate-fade-in animation-delay-100">
        <div className="flex items-center space-x-2 mb-4">
          <MessageSquare className="h-5 w-5 text-psyco-green-DEFAULT" />
          <h3 className="text-xl font-medium">Contact Information</h3>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-psyco-black-light border-psyco-green-muted/50"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-psyco-black-light border-psyco-green-muted/50"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-300 mb-1">Phone</label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="bg-psyco-black-light border-psyco-green-muted/50"
            />
          </div>
          
          <div>
            <label htmlFor="location" className="block text-gray-300 mb-1">Event Location</label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="bg-psyco-black-light border-psyco-green-muted/50"
            />
          </div>
          
          <div>
            <label htmlFor="details" className="block text-gray-300 mb-1">Event Details</label>
            <Textarea
              id="details"
              name="details"
              rows={3}
              value={formData.details}
              onChange={handleInputChange}
              className="bg-psyco-black-light border-psyco-green-muted/50"
              placeholder="Please provide any specific requirements or details about your event"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-psyco-green-DEFAULT hover:bg-psyco-green-dark transition-colors"
          >
            Request Booking
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BookingCalendar;
