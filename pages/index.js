import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  LayoutGrid,
  BarChart3,
  Check,
  Clock,
  Users,
  Bell,
  Smartphone,
  Shield,
  Zap,
  TrendingUp,
  Star,
  ChevronDown,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">B</span>
            </div>
            <span className="text-xl font-bold text-foreground">brandmax.site</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex text-foreground">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://calendly.com/brandmaxsite/30min" target="_blank" rel="noopener noreferrer">
                Request Demo
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Glowing orb effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm text-primary font-medium">Trusted by 500+ Restaurants</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
              Modern Reservation Management for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Restaurants</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
              Streamline your restaurant operations with our comprehensive reservation platform. Manage bookings,
              optimize table assignments, and gain valuable customer insights—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8" asChild>
                <a href="https://calendly.com/brandmaxsite/30min" target="_blank" rel="noopener noreferrer">
                  Request Demo
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-border text-lg px-8"
              >
                View Features
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Restaurants</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">2M+</div>
                <div className="text-sm text-muted-foreground">Reservations</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm text-primary font-medium">Core Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Everything you need to manage reservations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Built for restaurants of all sizes, from intimate bistros to large dining establishments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 border border-primary/20">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Online Booking System</CardTitle>
                <CardDescription className="leading-relaxed text-muted-foreground">
                  Accept reservations 24/7 with our intuitive booking interface. Customers can book tables directly from
                  your website or mobile app with real-time availability.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 border border-accent/20">
                  <LayoutGrid className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">Table Management</CardTitle>
                <CardDescription className="leading-relaxed text-muted-foreground">
                  Visualize your floor plan and optimize table assignments in real-time. Reduce wait times and maximize
                  seating capacity with intelligent table allocation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 border border-primary/20">
                  <BarChart3 className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Customer Analytics</CardTitle>
                <CardDescription className="leading-relaxed text-muted-foreground">
                  Understand your customers better with detailed analytics. Track preferences, visit frequency, and
                  dining patterns to improve service quality.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="text-lg text-foreground">Automated Reminders</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Reduce no-shows with automated SMS and email reminders sent to customers before their reservation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Users className="w-8 h-8 text-accent mb-3" />
                <CardTitle className="text-lg text-foreground">Waitlist Management</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Manage walk-ins efficiently with digital waitlist. Notify guests via SMS when their table is ready.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Bell className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="text-lg text-foreground">Real-time Notifications</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Stay informed with instant notifications for new bookings, cancellations, and special requests.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Smartphone className="w-8 h-8 text-accent mb-3" />
                <CardTitle className="text-lg text-foreground">Mobile App</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Manage reservations on the go with our native iOS and Android apps for restaurant staff.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="text-lg text-foreground">Secure & Compliant</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Enterprise-grade security with SOC 2 compliance and GDPR-ready data protection.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Zap className="w-8 h-8 text-accent mb-3" />
                <CardTitle className="text-lg text-foreground">Quick Setup</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Get started in minutes with our simple onboarding process. No technical expertise required.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 relative">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm text-primary font-medium">Simple Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get started with brandmax.site in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Create Your Account</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sign up in minutes and customize your restaurant profile with your branding, hours, and table layout.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-accent/20">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Embed Booking Widget</h3>
              <p className="text-muted-foreground leading-relaxed">
                Add our booking widget to your website with a simple code snippet. No developer required.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Start Taking Reservations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Begin accepting reservations immediately and manage everything from your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm text-primary font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Increase Revenue & Reduce No-Shows
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our platform helps restaurants increase table turnover by 30% and reduce no-shows by 60% through
                intelligent booking management and automated reminders.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Boost Revenue</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Optimize table turnover and maximize seating capacity during peak hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-accent/20">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Better Customer Experience</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Provide seamless booking experience that keeps customers coming back.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Data-Driven Insights</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Make informed decisions with comprehensive analytics and reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border/50 flex items-center justify-center">
                <LayoutGrid className="w-32 h-32 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm text-primary font-medium">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Loved by Restaurant Owners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              See what our customers have to say about brandmax.site
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-foreground leading-relaxed">
                  "brandmax.site transformed how we manage reservations. No-shows dropped by 70% and our staff loves how
                  easy it is to use."
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="font-semibold text-foreground">Sarah Chen</div>
                  <div className="text-sm text-muted-foreground">Owner, The Garden Bistro</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-foreground leading-relaxed">
                  "The analytics dashboard gives us insights we never had before. We can now predict busy periods and
                  staff accordingly."
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="font-semibold text-foreground">Michael Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Manager, Coastal Kitchen</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-foreground leading-relaxed">
                  "Setup was incredibly simple. We were taking online reservations within an hour. Best investment we've
                  made this year."
                </CardDescription>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="font-semibold text-foreground">Emily Thompson</div>
                  <div className="text-sm text-muted-foreground">Owner, Urban Eats</div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm text-primary font-medium">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose the plan that fits your restaurant's needs. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Basic</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">$49</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-2 text-muted-foreground">Perfect for small restaurants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Up to 100 reservations/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Online booking widget</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Email notifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Basic analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Email support</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent border-border" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-primary border-2 relative bg-card/80 backdrop-blur-sm">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Pro</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">$149</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-2 text-muted-foreground">For growing restaurants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Unlimited reservations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Advanced table management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">SMS & email notifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Customer analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Waitlist management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Mobile app access</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">Custom</span>
                </div>
                <CardDescription className="mt-2 text-muted-foreground">For restaurant groups</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Everything in Pro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Multi-location support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">SLA guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">White-label options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">API access</span>
                  </li>
                </ul>
                <Button className="w-full bg-transparent border-border" variant="outline" asChild>
                  <a href="https://calendly.com/brandmaxsite/30min" target="_blank" rel="noopener noreferrer">
                    Contact Sales
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm text-primary font-medium">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about brandmax.site
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-foreground flex items-center justify-between">
                  How quickly can I get started?
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  You can set up your account and start taking reservations within 15 minutes. Our onboarding process is
                  designed to be simple and intuitive, requiring no technical expertise.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-foreground flex items-center justify-between">
                  Do you charge per reservation?
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  No, we offer flat monthly pricing with no per-reservation fees. The Pro and Enterprise plans include
                  unlimited reservations, making it easy to predict your costs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-foreground flex items-center justify-between">
                  Can I integrate with my existing website?
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Yes! Our booking widget can be embedded on any website with a simple code snippet. We also offer API
                  access for custom integrations on Enterprise plans.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-foreground flex items-center justify-between">
                  What happens if I exceed my plan limits?
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  We'll notify you when you're approaching your plan limits and make it easy to upgrade. You'll never
                  lose reservations or functionality.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-foreground flex items-center justify-between">
                  Is my customer data secure?
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Absolutely. We use enterprise-grade encryption, are SOC 2 compliant, and follow GDPR guidelines. Your
                  customer data is protected with the highest security standards.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready to transform your restaurant operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Join hundreds of restaurants already using brandmax.site to manage their reservations. Start your free
              trial today—no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8" asChild>
                <a href="https://calendly.com/brandmaxsite/30min" target="_blank" rel="noopener noreferrer">
                  Request Demo
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-border text-lg px-8"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">B</span>
                </div>
                <span className="text-xl font-bold text-foreground">brandmax.site</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-sm">
                Modern reservation management software for restaurants. Streamline operations, reduce no-shows, and
                delight your customers.
              </p>
              <div className="text-sm text-muted-foreground">© 2025 brandmax.site. All rights reserved.</div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    System Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
            <div className="text-sm text-muted-foreground">Made with care for restaurants worldwide</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
