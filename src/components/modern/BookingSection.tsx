import { motion } from 'framer-motion';
import { Clock, Video, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const generateCalendarDates = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDayOfWeek = firstDay.getDay();
  
  const dates = [];
  
  // Add empty cells for days before the first of the month
  for (let i = 0; i < (startDayOfWeek === 0 ? 6 : startDayOfWeek - 1); i++) {
    dates.push({ day: null, available: false, selected: false });
  }
  
  // Add all days of the month
  const today = new Date();
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isPast = date < today;
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    
    dates.push({
      day,
      available: !isPast && !isWeekend,
      selected: false,
      date: date,
    });
  }
  
  return dates;
};

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];

export const BookingSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const dates = generateCalendarDates(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const monthNames = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
  ];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setShowForm(false);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking:', { selectedDate, selectedTime, ...formData });
    alert(`Rendez-vous confirmé pour le ${selectedDate?.toLocaleDateString('fr-FR')} à ${selectedTime}`);
  };

  return (
    <section id="booking-section" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discutons de votre projet IA ensemble !
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Imaginez une entreprise où chaque minute est productive et où vos processus 
            travaillent pour vous. Réservez un <span className="text-white font-semibold">
            audit gratuit et sans engagement</span> pour découvrir comment nous pouvons{' '}
            <span className="text-white font-semibold">transformer votre entreprise 
            en seulement 30 jours</span>.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 h-full">
              <p className="text-blue-400 text-sm font-medium mb-2">Malick</p>
              <h3 className="text-3xl font-bold text-white mb-6">Appel de 30 minutes</h3>
              
              {/* Duration */}
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">30 min</span>
              </div>
              
              {/* Conference info */}
              <div className="flex items-start gap-3 mb-6">
                <Video className="w-5 h-5 text-slate-400 mt-1" />
                <p className="text-slate-400 text-sm">
                  Informations sur la conférence en ligne fournies à la confirmation.
                </p>
              </div>
              
              {/* Explanatory text */}
              <div className="pt-6 border-t border-slate-700">
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Afin de garder un standard de qualité élevé et à fort rendement pour 
                  votre entreprise, nous sélectionnons minutieusement les dossiers et 
                  n'acceptons <span className="text-white font-semibold">que 2 clients 
                  par mois</span>.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Cela nous permet de vous apporter rapidement des résultats et la{' '}
                  <span className="text-white font-semibold">garantie de faire décoller 
                  votre entreprise</span> en un temps record.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 relative">
              {/* Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full rotate-12 shadow-lg z-10">
                Cal.com
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">
                Sélectionnez la date et l'heure
              </h3>
              
              {/* Calendar Navigation */}
              <div className="flex items-center justify-between mb-6">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handlePrevMonth}
                  className="hover:bg-slate-700"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <span className="text-lg font-medium text-white">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handleNextMonth}
                  className="hover:bg-slate-700"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Days of week */}
              <div className="grid grid-cols-7 gap-2 mb-3">
                {['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'].map((day) => (
                  <div key={day} className="text-center text-xs text-slate-400 font-medium">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar dates */}
              <div className="grid grid-cols-7 gap-2 mb-6">
                {dates.map((dateObj, index) => (
                  <Button
                    key={index}
                    variant={dateObj.selected ? "default" : "ghost"}
                    className={cn(
                      "h-10 w-full p-0 text-sm",
                      !dateObj.day && "invisible",
                      dateObj.available && "hover:bg-blue-500/20 hover:text-white text-slate-300",
                      !dateObj.available && dateObj.day && "text-slate-600 cursor-not-allowed",
                      selectedDate?.getDate() === dateObj.day && 
                      selectedDate?.getMonth() === currentDate.getMonth() &&
                      "bg-blue-500 text-white hover:bg-blue-600"
                    )}
                    disabled={!dateObj.available}
                    onClick={() => dateObj.date && handleDateSelect(dateObj.date)}
                  >
                    {dateObj.day}
                  </Button>
                ))}
              </div>

              {/* Time slots - show if date selected */}
              {selectedDate && !showForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-6"
                >
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Créneaux disponibles
                  </h4>
                  <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant="outline"
                        size="sm"
                        className={cn(
                          "border-slate-600 hover:bg-blue-500/20 hover:border-blue-500",
                          selectedTime === time && "bg-blue-500 border-blue-500 text-white"
                        )}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Booking Form - show if time selected */}
              {showForm && selectedDate && selectedTime && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  onSubmit={handleSubmit}
                  className="space-y-4 border-t border-slate-700 pt-6"
                >
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-4">
                    <p className="text-sm text-blue-300">
                      📅 {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p className="text-sm text-blue-300">
                      🕐 {selectedTime}
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="name" className="text-slate-300">Nom complet</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-slate-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-slate-300">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Confirmer le rendez-vous
                  </Button>
                </motion.form>
              )}
              
              {/* Timezone */}
              <div className="flex items-center gap-2 text-sm text-slate-400 mt-6">
                <Globe className="w-4 h-4" />
                <span>Heure d'Europe centrale ({new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })})</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
