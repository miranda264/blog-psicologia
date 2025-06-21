import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Brain, Search, Menu, X, Calendar, User, ArrowRight, Lightbulb, Heart, BookOpen, Smile, TrendingUp, Star, Clock } from 'lucide-react'
import psychologyHeroImage from './assets/psychology-hero.jpg'
import mentalHealthImage from './assets/mental-health.png'
import psychologyBenefitsImage from './assets/psychology-benefits.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [featuredArticles, setFeaturedArticles] = useState([])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Função para carregar os artigos do JSON
    const loadArticles = async () => {
      try {
        const response = await fetch('/articles.json'); // Caminho relativo ao diretório público
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFeaturedArticles(data);
      } catch (error) {
        console.error("Erro ao carregar artigos do JSON:", error);
        // Fallback para artigos hardcoded se o JSON não carregar
        setFeaturedArticles([
          {
            id: 1,
            title: "Desvendando a Ansiedade: Estratégias para o Bem-Estar",
            excerpt: "Explore técnicas eficazes para gerenciar a ansiedade e cultivar a tranquilidade no dia a dia.",
            category: "Saúde Mental",
            date: "15 de Junho, 2025",
            author: "Dra. Ana Costa",
            image: mentalHealthImage,
            readTime: "8 min",
            views: "3.5k",
            rating: 4.9
          },
          {
            id: 2,
            title: "A Importância da Terapia na Jornada do Autoconhecimento",
            excerpt: "Descubra como a terapia pode ser um pilar fundamental para o desenvolvimento pessoal e a compreensão de si mesmo.",
            category: "Autoconhecimento",
            date: "12 de Junho, 2025",
            author: "Dr. Pedro Almeida",
            image: psychologyBenefitsImage,
            readTime: "10 min",
            views: "2.9k",
            rating: 4.8
          },
          {
            id: 3,
            title: "Relacionamentos Saudáveis: Construindo Conexões Duradouras",
            excerpt: "Aprenda a fortalecer seus laços interpessoais e a construir relacionamentos baseados em respeito e empatia.",
            category: "Relacionamentos",
            date: "10 de Junho, 2025",
            author: "Dra. Sofia Mendes",
            image: psychologyHeroImage,
            readTime: "7 min",
            views: "4.1k",
            rating: 4.7
          }
        ]);
      }
    };

    loadArticles();
  }, []);

  const categories = [
    { name: "Saúde Mental", icon: Brain, count: 30, color: "bg-purple-50 text-purple-600 border-purple-200", trend: "+15%" },
    { name: "Autoconhecimento", icon: Lightbulb, count: 25, color: "bg-yellow-50 text-yellow-600 border-yellow-200", trend: "+10%" },
    { name: "Relacionamentos", icon: Heart, count: 20, color: "bg-pink-50 text-pink-600 border-pink-200", trend: "+12%" },
    { name: "Terapia", icon: BookOpen, count: 15, color: "bg-teal-50 text-teal-600 border-teal-200", trend: "+8%" }
  ]

  const stats = [
    { label: "Artigos Publicados", value: "120+", icon: TrendingUp },
    { label: "Leitores Mensais", value: "30k+", icon: User },
    { label: "Avaliação Média", value: "4.9", icon: Star },
    { label: "Anos de Experiência", value: "15+", icon: Clock }
  ]

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <Smile className="h-8 w-8 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gray-200 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300 -z-10"></div>
              </div>
              <span className="text-2xl font-light text-gray-900 tracking-tight">Mente em Foco</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {['Início', 'Artigos', 'Categorias', 'Sobre', 'Contato'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 rounded-lg hover:bg-gray-100/50 relative group"
                >
                  {item}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2"></div>
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-focus-within:text-gray-600 transition-colors" />
                <Input 
                  placeholder="Buscar artigos..." 
                  className="pl-10 w-64 border-gray-200 focus:border-gray-400 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                />
              </div>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Newsletter
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-white/95 backdrop-blur-md border-t transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-2 space-y-1">
            {['Início', 'Artigos', 'Categorias', 'Sobre', 'Contato'].map((item) => (
              <a key={item} href="#" className="block py-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 border-b border-gray-100 last:border-b-0">
                {item}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <Input placeholder="Buscar artigos..." className="w-full" />
              <Button className="w-full bg-gray-900 hover:bg-gray-800">Newsletter</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 animate-pulse">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></div>
                  Conteúdo atualizado diariamente
                </div>
                <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight tracking-tight">
                  Sua Jornada para o
                  <span className="block text-gray-600 italic"> Bem-Estar</span>
                  <span className="block font-medium"> Mental Começa Aqui</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Conteúdo especializado, baseado em evidências científicas, para ajudar você a tomar decisões informadas sobre sua saúde mental e emocional.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white group transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Explorar Artigos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                  Sobre Nós
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl mb-3 group-hover:bg-gray-200 transition-colors duration-300">
                      <stat.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  src={psychologyHeroImage} 
                  alt="Profissional de psicologia" 
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm opacity-90">Profissionais qualificados</div>
                  <div className="text-lg font-medium">Cuidando da sua mente</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
                <Brain className="h-8 w-8 text-purple-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-yellow-100 rounded-xl flex items-center justify-center animate-pulse">
                <Lightbulb className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">Explore por Categoria</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Encontre conteúdo especializado nas principais áreas da psicologia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className={`border-2 transition-all duration-500 cursor-pointer group hover:shadow-xl hover:-translate-y-2 ${category.color}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2">
                    <Badge variant="secondary" className="text-xs bg-white/50">
                      {category.trend}
                    </Badge>
                  </div>
                  
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-500 ${
                    hoveredCard === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                  } ${category.color.replace('50', '100')}`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.count} artigos</p>
                  
                  <div className={`w-full h-1 bg-gray-200 rounded-full overflow-hidden transition-all duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className={`h-full rounded-full transition-all duration-1000 ${
                      hoveredCard === index ? 'w-full' : 'w-0'
                    } ${category.color.replace('50', '500').replace('text', 'bg')}`}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">Artigos em Destaque</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Conteúdo mais recente e relevante para sua saúde mental e bem-estar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={article.id} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-white hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700 backdrop-blur-sm">
                    {article.category}
                  </Badge>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs text-gray-700">{article.rating}</span>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-gray-600 transition-colors duration-300 leading-tight">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>{article.views}</span>
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-105 group">
              Ver Todos os Artigos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                Mantenha-se Informado
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Receba as últimas novidades e dicas de psicologia diretamente no seu e-mail
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Seu e-mail" 
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm focus:bg-white/20 transition-all duration-300"
              />
              <Button className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Assinar
              </Button>
            </div>
            
            <p className="text-sm text-gray-400">
              Sem spam. Cancele a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Smile className="h-8 w-8 text-gray-700" />
                <span className="text-2xl font-light text-gray-900 tracking-tight">Mente em Foco</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Informações confiáveis de psicologia para uma vida mais equilibrada.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:scale-110 transform">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Categorias</h3>
              <ul className="space-y-2">
                {['Saúde Mental', 'Autoconhecimento', 'Relacionamentos', 'Terapia'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Recursos</h3>
              <ul className="space-y-2">
                {['Artigos', 'Guias', 'Ferramentas', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Contato</h3>
              <ul className="space-y-2 text-gray-600">
                <li>contato@menteemfoco.com</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Mente em Foco. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

