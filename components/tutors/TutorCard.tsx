import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { UserCheck } from "lucide-react";

interface Tutor {
  id: number;
  name: string;
  subject: string;
  rating: number;
  ratePerHour: number;
  bio: string;
  avatar: string;
  available: boolean;
}

const TutorCard = ({ tutor }: { tutor: Tutor }) => {
  return (
    <Card className="h-full group hover:-translate-y-2 transition-transform duration-300">
      <CardHeader className="p-0 relative h-48 overflow-hidden">
        <img 
          src={tutor.avatar} 
          alt={tutor.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {tutor.available && (
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="accent" className="bg-white/90 backdrop-blur-md border border-[var(--border)] text-green-700 shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available
            </Badge>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="p-6 pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold font-serif mb-1 group-hover:text-[var(--primary)] transition-colors">{tutor.name}</h3>
            <Badge variant="primary" className="mb-2">{tutor.subject}</Badge>
          </div>
          <div className="text-right">
            <span className="text-2xl font-mono font-bold">${tutor.ratePerHour}</span>
            <span className="text-[var(--muted-foreground)] text-xs block">/ hour</span>
          </div>
        </div>
        
        <StarRating rating={tutor.rating} />
        
        <p className="mt-4 text-sm text-[var(--muted-foreground)] line-clamp-2 leading-relaxed h-10">
          {tutor.bio}
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link href={`/book?tutorId=${tutor.id}`} className="w-full">
          <Button variant="secondary" className="w-full group-hover:bg-[#aff33e] group-hover:text-black transition-all">
            Book a Session
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TutorCard;
