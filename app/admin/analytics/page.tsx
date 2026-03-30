"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format, subDays, subMonths } from "date-fns"
import {
  CalendarIcon,
  Download,
  TrendingDown,
  TrendingUp,
  Users,
  Eye,
  Clock,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

// Sample data for analytics
const generateDailyData = (days: number) => {
  const data = []
  const today = new Date()

  for (let i = days - 1; i >= 0; i--) {
    const date = subDays(today, i)
    const formattedDate = format(date, "MMM dd")

    // Generate random but somewhat realistic data
    const visitors = Math.floor(Math.random() * 50) + 50
    const pageviews = visitors * (Math.random() * 2 + 2)
    const sessions = visitors * (Math.random() * 0.8 + 1)
    const bounceRate = Math.random() * 30 + 40
    const avgSessionDuration = Math.random() * 120 + 60

    data.push({
      date: formattedDate,
      visitors: Math.floor(visitors),
      pageviews: Math.floor(pageviews),
      sessions: Math.floor(sessions),
      bounceRate: bounceRate.toFixed(1),
      avgSessionDuration: Math.floor(avgSessionDuration),
    })
  }

  return data
}

const generateMonthlyData = (months: number) => {
  const data = []
  const today = new Date()

  for (let i = months - 1; i >= 0; i--) {
    const date = subMonths(today, i)
    const formattedDate = format(date, "MMM yyyy")

    // Generate random but somewhat realistic data
    const visitors = Math.floor(Math.random() * 1000) + 1000
    const pageviews = visitors * (Math.random() * 2 + 2)
    const sessions = visitors * (Math.random() * 0.8 + 1)
    const bounceRate = Math.random() * 30 + 40
    const avgSessionDuration = Math.random() * 120 + 60

    data.push({
      date: formattedDate,
      visitors: Math.floor(visitors),
      pageviews: Math.floor(pageviews),
      sessions: Math.floor(sessions),
      bounceRate: bounceRate.toFixed(1),
      avgSessionDuration: Math.floor(avgSessionDuration),
    })
  }

  return data
}

const trafficSourcesData = [
  { name: "Organic Search", value: 45 },
  { name: "Direct", value: 25 },
  { name: "Referral", value: 15 },
  { name: "Social", value: 10 },
  { name: "Email", value: 5 },
]

const topPagesData = [
  { page: "Home", views: 1245, avgTime: 85 },
  { page: "Services", views: 986, avgTime: 120 },
  { page: "About Us", views: 754, avgTime: 95 },
  { page: "Contact", views: 621, avgTime: 65 },
  { page: "Request Service", views: 543, avgTime: 145 },
]

const topKeywordsData = [
  { keyword: "property maintenance royal palm beach", position: 3, clicks: 145, impressions: 1850 },
  { keyword: "rental property landscaping florida", position: 5, clicks: 98, impressions: 1240 },
  { keyword: "commercial property maintenance near me", position: 7, clicks: 76, impressions: 980 },
  { keyword: "property management services florida", position: 12, clicks: 45, impressions: 720 },
  { keyword: "janitorial services west palm beach", position: 15, clicks: 32, impressions: 540 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export default function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState<"7d" | "30d" | "3m" | "6m" | "12m">("30d")
  const [fromDate, setFromDate] = useState<Date | undefined>(subDays(new Date(), 30))
  const [toDate, setToDate] = useState<Date | undefined>(new Date())

  // Generate data based on selected date range
  const getChartData = () => {
    switch (dateRange) {
      case "7d":
        return generateDailyData(7)
      case "30d":
        return generateDailyData(30)
      case "3m":
        return generateMonthlyData(3)
      case "6m":
        return generateMonthlyData(6)
      case "12m":
        return generateMonthlyData(12)
      default:
        return generateDailyData(30)
    }
  }

  const chartData = getChartData()

  // Calculate summary metrics
  const currentVisitors = chartData.reduce((sum, item) => sum + item.visitors, 0)
  const currentPageviews = chartData.reduce((sum, item) => sum + item.pageviews, 0)
  const avgBounceRate = chartData.reduce((sum, item) => sum + Number.parseFloat(item.bounceRate), 0) / chartData.length
  const avgSessionDuration = chartData.reduce((sum, item) => sum + item.avgSessionDuration, 0) / chartData.length

  // Calculate percent changes (simulated)
  const visitorChange = Math.floor(Math.random() * 30) - 10 // -10% to +20%
  const pageviewChange = Math.floor(Math.random() * 35) - 10 // -10% to +25%
  const bounceRateChange = Math.floor(Math.random() * 20) - 15 // -15% to +5%
  const durationChange = Math.floor(Math.random() * 25) - 10 // -10% to +15%

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <p className="text-gray-600 mb-8">Monitor website performance, track SEO progress, and analyze user behavior.</p>

      {/* Date Range Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex gap-2">
          <Button variant={dateRange === "7d" ? "default" : "outline"} onClick={() => setDateRange("7d")}>
            7D
          </Button>
          <Button variant={dateRange === "30d" ? "default" : "outline"} onClick={() => setDateRange("30d")}>
            30D
          </Button>
          <Button variant={dateRange === "3m" ? "default" : "outline"} onClick={() => setDateRange("3m")}>
            3M
          </Button>
          <Button variant={dateRange === "6m" ? "default" : "outline"} onClick={() => setDateRange("6m")}>
            6M
          </Button>
          <Button variant={dateRange === "12m" ? "default" : "outline"} onClick={() => setDateRange("12m")}>
            12M
          </Button>
        </div>

        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {fromDate ? format(fromDate, "PPP") : "Select date"} - {toDate ? format(toDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="range"
                selected={{
                  from: fromDate,
                  to: toDate,
                }}
                onSelect={(range) => {
                  setFromDate(range?.from)
                  setToDate(range?.to)
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{currentVisitors.toLocaleString()}</div>
              <div className={`flex items-center ${visitorChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                {visitorChange >= 0 ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                <span>{Math.abs(visitorChange)}%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">vs. previous period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Pageviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{currentPageviews.toLocaleString()}</div>
              <div className={`flex items-center ${pageviewChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                {pageviewChange >= 0 ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                <span>{Math.abs(pageviewChange)}%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">vs. previous period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Bounce Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{avgBounceRate.toFixed(1)}%</div>
              <div className={`flex items-center ${bounceRateChange <= 0 ? "text-green-500" : "text-red-500"}`}>
                {bounceRateChange <= 0 ? (
                  <TrendingDown className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingUp className="h-4 w-4 mr-1" />
                )}
                <span>{Math.abs(bounceRateChange)}%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">vs. previous period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Avg. Session Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">
                {Math.floor(avgSessionDuration / 60)}m {Math.floor(avgSessionDuration % 60)}s
              </div>
              <div className={`flex items-center ${durationChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                {durationChange >= 0 ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                <span>{Math.abs(durationChange)}%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">vs. previous period</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Analytics Tabs */}
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="acquisition">Acquisition</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Website Traffic</CardTitle>
                <CardDescription>Visitors and pageviews over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="visitors" stroke="#1a472a" activeDot={{ r: 8 }} name="Visitors" />
                      <Line type="monotone" dataKey="pageviews" stroke="#4caf50" name="Pageviews" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Where your visitors are coming from</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={trafficSourcesData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {trafficSourcesData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Pages</CardTitle>
                  <CardDescription>Most viewed pages on your website</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={topPagesData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="page" type="category" width={100} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="views" fill="#1a472a" name="Page Views" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* SEO Tab */}
        <TabsContent value="seo">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Keywords</CardTitle>
                <CardDescription>Keywords driving traffic to your website</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Keyword</th>
                        <th className="text-center py-3 px-4">Position</th>
                        <th className="text-center py-3 px-4">Clicks</th>
                        <th className="text-center py-3 px-4">Impressions</th>
                        <th className="text-center py-3 px-4">CTR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topKeywordsData.map((keyword, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4">{keyword.keyword}</td>
                          <td className="text-center py-3 px-4">{keyword.position}</td>
                          <td className="text-center py-3 px-4">{keyword.clicks}</td>
                          <td className="text-center py-3 px-4">{keyword.impressions}</td>
                          <td className="text-center py-3 px-4">
                            {((keyword.clicks / keyword.impressions) * 100).toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>SEO Health</CardTitle>
                  <CardDescription>Current status of your website's SEO</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Mobile Friendliness</span>
                      <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                      <span className="text-green-500 font-medium">95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Page Speed</span>
                      <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                      <span className="text-yellow-500 font-medium">78%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>On-Page SEO</span>
                      <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "88%" }}></div>
                      </div>
                      <span className="text-green-500 font-medium">88%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Backlinks</span>
                      <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                      <span className="text-yellow-500 font-medium">65%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Security</span>
                      <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                      <span className="text-green-500 font-medium">100%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SEO Recommendations</CardTitle>
                  <CardDescription>Suggestions to improve your search rankings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-yellow-100 text-yellow-800 p-1 rounded mr-2 mt-0.5">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Improve page load speed</p>
                        <p className="text-sm text-gray-600">
                          Optimize images and reduce render-blocking resources on the Services page.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-100 text-yellow-800 p-1 rounded mr-2 mt-0.5">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Build more quality backlinks</p>
                        <p className="text-sm text-gray-600">
                          Focus on local business directories and industry associations.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 p-1 rounded mr-2 mt-0.5">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Add more testimonials</p>
                        <p className="text-sm text-gray-600">
                          Incorporate customer reviews with relevant keywords on service pages.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 p-1 rounded mr-2 mt-0.5">
                        <Eye className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Enhance meta descriptions</p>
                        <p className="text-sm text-gray-600">
                          Update meta descriptions for better click-through rates from search results.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Other tabs would be implemented similarly */}
        <TabsContent value="audience">
          <Card>
            <CardHeader>
              <CardTitle>Audience Overview</CardTitle>
              <CardDescription>Detailed information about your website visitors</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                This section would contain detailed audience demographics, geographic data, device usage, and user
                behavior patterns.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="acquisition">
          <Card>
            <CardHeader>
              <CardTitle>Acquisition Overview</CardTitle>
              <CardDescription>How users are finding your website</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                This section would contain detailed information about traffic sources, referrals, campaigns, and
                conversion paths.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="behavior">
          <Card>
            <CardHeader>
              <CardTitle>Behavior Overview</CardTitle>
              <CardDescription>How users interact with your website</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                This section would contain detailed information about page views, site content performance, site speed,
                and user flow through the website.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* External Analytics Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="#4285F4">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
              </svg>
              Google Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Access detailed website analytics and user behavior data.</p>
            <Button asChild className="w-full">
              <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">
                Open Google Analytics
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="#4285F4">
                <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z" />
                <circle cx="12" cy="12" r="3.5" />
              </svg>
              Google Search Console
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Monitor search performance and optimize visibility.</p>
            <Button asChild className="w-full">
              <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">
                Open Search Console
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="#FF4500">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
              Social Media Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Track engagement and performance across social platforms.</p>
            <Button asChild className="w-full">
              <a href="https://business.facebook.com/" target="_blank" rel="noopener noreferrer">
                Open Social Analytics
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
