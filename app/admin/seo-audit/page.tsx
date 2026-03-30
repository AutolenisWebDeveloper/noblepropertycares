"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Search,
  X,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react"

// Sample SEO audit data
const pageAuditData = [
  {
    url: "https://noblepropertycares.com/",
    title: "Noble Property Care LLC - Property Maintenance & Management",
    metaDescription:
      "Your trusted partner in property maintenance and management services for residential homes, apartment complexes, and commercial properties in Lake Worth, FL.",
    h1: "Expert Rental Property Landscaping & Commercial Maintenance",
    wordCount: 1250,
    issues: [
      { type: "warning", message: "Page load time is 3.2s (target: under 2.5s)" },
      { type: "info", message: "Consider adding more internal links to key service pages" },
    ],
    score: 92,
  },
  {
    url: "https://noblepropertycares.com/services",
    title: "Professional Property Care Services | Landscaping, Maintenance & Cleaning",
    metaDescription:
      "Explore our comprehensive property care services including rental property landscaping, commercial maintenance, janitorial cleaning, and residential property management in Lake Worth, FL.",
    h1: "Our Property Care Services",
    wordCount: 1850,
    issues: [
      { type: "warning", message: "2 images missing alt text" },
      { type: "info", message: "Consider adding FAQ section for better featured snippets" },
    ],
    score: 88,
  },
  {
    url: "https://noblepropertycares.com/about",
    title: "About Noble Property Care | Your Trusted Property Maintenance Partner",
    metaDescription:
      "Learn about Noble Property Care LLC, our story, core values, expert team, and commitment to excellence in property maintenance and management services in Lake Worth, FL.",
    h1: "About Noble Property Care LLC",
    wordCount: 2100,
    issues: [],
    score: 96,
  },
  {
    url: "https://noblepropertycares.com/contact",
    title: "Contact Noble Property Care | Request Property Maintenance Services",
    metaDescription:
      "Contact Noble Property Care for professional property maintenance and management services in Lake Worth, FL. Get in touch with our team for a consultation or service request.",
    h1: "Contact Us",
    wordCount: 650,
    issues: [
      { type: "error", message: "Form submission has console errors" },
      { type: "warning", message: "Missing structured data for local business" },
    ],
    score: 78,
  },
  {
    url: "https://noblepropertycares.com/request-service",
    title: "Request Property Maintenance Services | Noble Property Care",
    metaDescription:
      "Request professional property maintenance, landscaping, cleaning, or management services from Noble Property Care. Fill out our service request form for a prompt response.",
    h1: "Request Service",
    wordCount: 850,
    issues: [{ type: "warning", message: "Calendar widget not fully accessible" }],
    score: 85,
  },
]

// Sample keyword tracking data
const keywordTrackingData = [
  {
    keyword: "property maintenance royal palm beach",
    volume: 320,
    difficulty: 42,
    currentRank: 3,
    previousRank: 5,
    change: 2,
    url: "https://noblepropertycares.com/",
  },
  {
    keyword: "rental property landscaping florida",
    volume: 210,
    difficulty: 38,
    currentRank: 5,
    previousRank: 8,
    change: 3,
    url: "https://noblepropertycares.com/services#landscaping",
  },
  {
    keyword: "commercial property maintenance near me",
    volume: 390,
    difficulty: 45,
    currentRank: 7,
    previousRank: 7,
    change: 0,
    url: "https://noblepropertycares.com/services#maintenance",
  },
  {
    keyword: "property management services florida",
    volume: 580,
    difficulty: 65,
    currentRank: 12,
    previousRank: 15,
    change: 3,
    url: "https://noblepropertycares.com/services",
  },
  {
    keyword: "janitorial services west palm beach",
    volume: 170,
    difficulty: 32,
    currentRank: 15,
    previousRank: 18,
    change: 3,
    url: "https://noblepropertycares.com/services#cleaning",
  },
  {
    keyword: "property maintenance company royal palm beach",
    volume: 90,
    difficulty: 28,
    currentRank: 2,
    previousRank: 4,
    change: 2,
    url: "https://noblepropertycares.com/",
  },
  {
    keyword: "apartment complex landscaping florida",
    volume: 110,
    difficulty: 35,
    currentRank: 8,
    previousRank: 12,
    change: 4,
    url: "https://noblepropertycares.com/services#landscaping",
  },
  {
    keyword: "emergency property repairs palm beach",
    volume: 70,
    difficulty: 30,
    currentRank: 9,
    previousRank: 11,
    change: 2,
    url: "https://noblepropertycares.com/services#maintenance",
  },
]

// Sample technical SEO issues
const technicalIssues = [
  {
    type: "error",
    page: "https://noblepropertycares.com/services",
    issue: "2 images missing alt text",
    impact: "High",
    recommendation: "Add descriptive alt text to all images for accessibility and SEO",
  },
  {
    type: "warning",
    page: "https://noblepropertycares.com/",
    issue: "Page load time is 3.2s (target: under 2.5s)",
    impact: "Medium",
    recommendation: "Optimize images and reduce render-blocking resources",
  },
  {
    type: "warning",
    page: "https://noblepropertycares.com/contact",
    issue: "Missing structured data for local business",
    impact: "Medium",
    recommendation: "Add LocalBusiness schema markup to improve local search visibility",
  },
  {
    type: "error",
    page: "https://noblepropertycares.com/contact",
    issue: "Form submission has console errors",
    impact: "High",
    recommendation: "Fix JavaScript errors in form submission handler",
  },
  {
    type: "warning",
    page: "https://noblepropertycares.com/request-service",
    issue: "Calendar widget not fully accessible",
    impact: "Medium",
    recommendation: "Improve keyboard navigation and screen reader support for calendar widget",
  },
  {
    type: "info",
    page: "https://noblepropertycares.com/services",
    issue: "Consider adding FAQ section for better featured snippets",
    impact: "Low",
    recommendation: "Add structured FAQ content to improve chances of featured snippet placement",
  },
  {
    type: "info",
    page: "https://noblepropertycares.com/",
    issue: "Consider adding more internal links to key service pages",
    impact: "Low",
    recommendation: "Increase internal linking to distribute page authority and improve crawlability",
  },
]

// Sample content optimization suggestions
const contentSuggestions = [
  {
    page: "https://noblepropertycares.com/services#landscaping",
    title: "Rental Property Landscaping",
    suggestion: "Expand content with more specific details about seasonal landscaping services in Florida",
    targetKeywords: ["seasonal landscaping florida", "rental property curb appeal", "florida landscaping services"],
    priority: "High",
  },
  {
    page: "https://noblepropertycares.com/services#maintenance",
    title: "Commercial Property Maintenance",
    suggestion: "Add case studies or success stories with specific metrics and results",
    targetKeywords: [
      "commercial building maintenance",
      "property maintenance cost savings",
      "preventative maintenance",
    ],
    priority: "Medium",
  },
  {
    page: "https://noblepropertycares.com/services#cleaning",
    title: "Janitorial & Deep Cleaning",
    suggestion: "Create separate pages for commercial and residential cleaning services with detailed service lists",
    targetKeywords: ["commercial janitorial services", "residential deep cleaning", "office cleaning services"],
    priority: "High",
  },
  {
    page: "https://noblepropertycares.com/about",
    title: "About Us",
    suggestion: "Add more information about service areas with location-specific content",
    targetKeywords: [
      "property maintenance west palm beach",
      "royal palm beach property services",
      "wellington property care",
    ],
    priority: "Medium",
  },
  {
    page: "https://noblepropertycares.com/",
    title: "Homepage",
    suggestion: "Add testimonials section with industry-specific reviews (property managers, HOAs, business owners)",
    targetKeywords: ["trusted property maintenance", "reliable property services", "property management testimonials"],
    priority: "Medium",
  },
]

export default function SEOAuditPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter page audit data based on search term
  const filteredPageAudit = pageAuditData.filter(
    (page) =>
      page.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Filter keyword tracking data based on search term
  const filteredKeywords = keywordTrackingData.filter((keyword) =>
    keyword.keyword.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Filter technical issues based on search term
  const filteredIssues = technicalIssues.filter(
    (issue) =>
      issue.page.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.issue.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Filter content suggestions based on search term
  const filteredSuggestions = contentSuggestions.filter(
    (suggestion) =>
      suggestion.page.toLowerCase().includes(searchTerm.toLowerCase()) ||
      suggestion.suggestion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      suggestion.targetKeywords.some((keyword) => keyword.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  // Calculate overall SEO health score
  const overallScore = Math.round(pageAuditData.reduce((sum, page) => sum + page.score, 0) / pageAuditData.length)

  // Count issues by type
  const errorCount = technicalIssues.filter((issue) => issue.type === "error").length
  const warningCount = technicalIssues.filter((issue) => issue.type === "warning").length
  const infoCount = technicalIssues.filter((issue) => issue.type === "info").length

  // Calculate keyword improvement metrics
  const keywordsImproved = keywordTrackingData.filter((keyword) => keyword.change > 0).length
  const keywordsDeclined = keywordTrackingData.filter((keyword) => keyword.change < 0).length
  const keywordsUnchanged = keywordTrackingData.filter((keyword) => keyword.change === 0).length

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">SEO Audit & Performance</h1>
      <p className="text-gray-600 mb-8">
        Comprehensive analysis of your website's SEO performance with actionable recommendations.
      </p>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder="Search pages, keywords, or issues..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Overall SEO Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <div className="text-3xl font-bold">{overallScore}/100</div>
              <Badge
                className={overallScore >= 90 ? "bg-green-500" : overallScore >= 70 ? "bg-yellow-500" : "bg-red-500"}
              >
                {overallScore >= 90 ? "Excellent" : overallScore >= 70 ? "Good" : "Needs Improvement"}
              </Badge>
            </div>
            <Progress value={overallScore} className="h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Technical Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{technicalIssues.length}</div>
            <div className="flex gap-2">
              <Badge variant="destructive" className="flex gap-1 items-center">
                <X size={12} /> {errorCount} Errors
              </Badge>
              <Badge
                variant="outline"
                className="flex gap-1 items-center text-yellow-600 border-yellow-300 bg-yellow-50"
              >
                <Clock size={12} /> {warningCount} Warnings
              </Badge>
              <Badge variant="outline" className="flex gap-1 items-center">
                <FileText size={12} /> {infoCount} Info
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Keyword Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{keywordTrackingData.length}</div>
            <div className="flex gap-2">
              <Badge className="bg-green-500 flex gap-1 items-center">
                <TrendingUp size={12} /> {keywordsImproved} Improved
              </Badge>
              <Badge variant="outline" className="flex gap-1 items-center text-red-600 border-red-300 bg-red-50">
                <TrendingDown size={12} /> {keywordsDeclined} Declined
              </Badge>
              <Badge variant="outline" className="flex gap-1 items-center">
                <Minus size={12} /> {keywordsUnchanged} Unchanged
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Content Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{contentSuggestions.length}</div>
            <div className="flex gap-2">
              <Badge className="bg-primary flex gap-1 items-center">
                <CheckCircle size={12} /> {contentSuggestions.filter((s) => s.priority === "High").length} High Priority
              </Badge>
              <Badge variant="outline" className="flex gap-1 items-center text-primary border-primary/30 bg-primary/10">
                <Clock size={12} /> {contentSuggestions.filter((s) => s.priority === "Medium").length} Medium
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="page-audit">
        <TabsList className="mb-6">
          <TabsTrigger value="page-audit">Page Audit</TabsTrigger>
          <TabsTrigger value="keyword-tracking">Keyword Tracking</TabsTrigger>
          <TabsTrigger value="technical-issues">Technical Issues</TabsTrigger>
          <TabsTrigger value="content-optimization">Content Optimization</TabsTrigger>
        </TabsList>

        {/* Page Audit Tab */}
        <TabsContent value="page-audit">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Page Audit Results</CardTitle>
                <CardDescription>SEO analysis of individual pages on your website</CardDescription>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Download size={16} />
                Export Report
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="text-center">Word Count</TableHead>
                    <TableHead className="text-center">Issues</TableHead>
                    <TableHead className="text-center">Score</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPageAudit.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                        No pages found matching your search criteria
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredPageAudit.map((page, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium max-w-[200px] truncate">
                          {page.url.replace("https://noblepropertycares.com", "")}
                        </TableCell>
                        <TableCell className="max-w-[300px] truncate" title={page.title}>
                          {page.title}
                        </TableCell>
                        <TableCell className="text-center">{page.wordCount}</TableCell>
                        <TableCell className="text-center">
                          {page.issues.length > 0 ? (
                            <Badge
                              variant={
                                page.issues.some((issue) => issue.type === "error")
                                  ? "destructive"
                                  : page.issues.some((issue) => issue.type === "warning")
                                    ? "outline"
                                    : "secondary"
                              }
                            >
                              {page.issues.length} {page.issues.length === 1 ? "issue" : "issues"}
                            </Badge>
                          ) : (
                            <Badge className="bg-green-500">No issues</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center">
                            <span
                              className={
                                page.score >= 90
                                  ? "text-green-600"
                                  : page.score >= 70
                                    ? "text-yellow-600"
                                    : "text-red-600"
                              }
                            >
                              {page.score}
                            </span>
                            <span className="text-gray-400">/100</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <a href={page.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} className="mr-1" /> View
                            </a>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Keyword Tracking Tab */}
        <TabsContent value="keyword-tracking">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Keyword Rankings</CardTitle>
                <CardDescription>Track your position in search results for target keywords</CardDescription>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Download size={16} />
                Export Data
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Keyword</TableHead>
                    <TableHead className="text-center">Search Volume</TableHead>
                    <TableHead className="text-center">Difficulty</TableHead>
                    <TableHead className="text-center">Current Rank</TableHead>
                    <TableHead className="text-center">Previous Rank</TableHead>
                    <TableHead className="text-center">Change</TableHead>
                    <TableHead className="text-right">Ranking URL</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredKeywords.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                        No keywords found matching your search criteria
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredKeywords.map((keyword, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{keyword.keyword}</TableCell>
                        <TableCell className="text-center">{keyword.volume}</TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center">
                            <span
                              className={
                                keyword.difficulty < 30
                                  ? "text-green-600"
                                  : keyword.difficulty < 50
                                    ? "text-yellow-600"
                                    : "text-red-600"
                              }
                            >
                              {keyword.difficulty}
                            </span>
                            <span className="text-gray-400">/100</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-center font-semibold">{keyword.currentRank}</TableCell>
                        <TableCell className="text-center text-gray-500">{keyword.previousRank}</TableCell>
                        <TableCell className="text-center">
                          {keyword.change > 0 ? (
                            <Badge className="bg-green-500">+{keyword.change}</Badge>
                          ) : keyword.change < 0 ? (
                            <Badge variant="destructive">{keyword.change}</Badge>
                          ) : (
                            <Badge variant="outline">0</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <a href={keyword.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} className="mr-1" /> View
                            </a>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Technical Issues Tab */}
        <TabsContent value="technical-issues">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Technical SEO Issues</CardTitle>
                <CardDescription>Issues that may be affecting your search engine visibility</CardDescription>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Download size={16} />
                Export Issues
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Issue</TableHead>
                    <TableHead>Page</TableHead>
                    <TableHead className="text-center">Impact</TableHead>
                    <TableHead>Recommendation</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredIssues.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                        No issues found matching your search criteria
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredIssues.map((issue, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {issue.type === "error" ? (
                              <Badge variant="destructive" className="w-16 justify-center">
                                Error
                              </Badge>
                            ) : issue.type === "warning" ? (
                              <Badge
                                variant="outline"
                                className="w-16 justify-center text-yellow-600 border-yellow-300 bg-yellow-50"
                              >
                                Warning
                              </Badge>
                            ) : (
                              <Badge variant="secondary" className="w-16 justify-center">
                                Info
                              </Badge>
                            )}
                            <span>{issue.issue}</span>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-[200px] truncate">
                          {issue.page.replace("https://noblepropertycares.com", "")}
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge
                            className={
                              issue.impact === "High"
                                ? "bg-red-500"
                                : issue.impact === "Medium"
                                  ? "bg-yellow-500"
                                  : "bg-blue-500"
                            }
                          >
                            {issue.impact}
                          </Badge>
                        </TableCell>
                        <TableCell className="max-w-[300px] truncate" title={issue.recommendation}>
                          {issue.recommendation}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <a href={issue.page} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} className="mr-1" /> View Page
                            </a>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Optimization Tab */}
        <TabsContent value="content-optimization">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Content Optimization Suggestions</CardTitle>
                <CardDescription>Recommendations to improve your content for better search visibility</CardDescription>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Download size={16} />
                Export Suggestions
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page</TableHead>
                    <TableHead>Suggestion</TableHead>
                    <TableHead>Target Keywords</TableHead>
                    <TableHead className="text-center">Priority</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSuggestions.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                        No suggestions found matching your search criteria
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredSuggestions.map((suggestion, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium max-w-[200px] truncate">
                          {suggestion.title}
                          <div className="text-xs text-gray-500 truncate">
                            {suggestion.page.replace("https://noblepropertycares.com", "")}
                          </div>
                        </TableCell>
                        <TableCell className="max-w-[300px]" title={suggestion.suggestion}>
                          {suggestion.suggestion}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {suggestion.targetKeywords.map((keyword, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge
                            className={
                              suggestion.priority === "High"
                                ? "bg-red-500"
                                : suggestion.priority === "Medium"
                                  ? "bg-yellow-500"
                                  : "bg-blue-500"
                            }
                          >
                            {suggestion.priority}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <a href={suggestion.page} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} className="mr-1" /> View Page
                            </a>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
