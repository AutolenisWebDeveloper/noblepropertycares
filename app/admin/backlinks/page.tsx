"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Download, ExternalLink, Plus, Search, Trash2 } from "lucide-react"

// Sample backlink data
const initialBacklinks = [
  {
    id: 1,
    domain: "palmbeachchamber.com",
    url: "https://palmbeachchamber.com/members/noble-property-care",
    anchorText: "Noble Property Care",
    pageTitle: "Chamber Members Directory",
    status: "Active",
    doFollow: true,
    dateAcquired: "2023-03-15",
    domainAuthority: 65,
    category: "Local Business",
    notes: "Chamber of Commerce membership directory listing",
  },
  {
    id: 2,
    domain: "royalpalmbeach.com",
    url: "https://royalpalmbeach.com/local-services/property-maintenance",
    anchorText: "professional property maintenance services",
    pageTitle: "Royal Palm Beach Local Services",
    status: "Active",
    doFollow: true,
    dateAcquired: "2023-04-22",
    domainAuthority: 58,
    category: "Local Directory",
    notes: "Featured listing in local services section",
  },
  {
    id: 3,
    domain: "floridapropertymanagement.org",
    url: "https://floridapropertymanagement.org/resources/vendors",
    anchorText: "Noble Property Care LLC",
    pageTitle: "Recommended Property Maintenance Vendors",
    status: "Pending",
    doFollow: false,
    dateAcquired: "2023-06-10",
    domainAuthority: 52,
    category: "Industry Association",
    notes: "Submitted application for listing, awaiting approval",
  },
  {
    id: 4,
    domain: "palmbeachpost.com",
    url: "https://palmbeachpost.com/business/local-spotlight/2023/05/15",
    anchorText: "property maintenance experts",
    pageTitle: "Local Business Spotlight: Services You Can Trust",
    status: "Active",
    doFollow: true,
    dateAcquired: "2023-05-15",
    domainAuthority: 78,
    category: "News Publication",
    notes: "Featured in local business spotlight article",
  },
  {
    id: 5,
    domain: "homeadvisor.com",
    url: "https://homeadvisor.com/pro/noble-property-care",
    anchorText: "Noble Property Care",
    pageTitle: "Noble Property Care - HomeAdvisor Pro",
    status: "Active",
    doFollow: false,
    dateAcquired: "2023-02-08",
    domainAuthority: 82,
    category: "Service Directory",
    notes: "Premium listing with reviews",
  },
]

// Backlink opportunity data
const backlinksOpportunities = [
  {
    id: 1,
    domain: "wellingtonfl.gov",
    url: "https://wellingtonfl.gov/businesses/local-services",
    contactEmail: "business@wellingtonfl.gov",
    contactName: "Business Directory Manager",
    status: "Not Started",
    domainAuthority: 72,
    category: "Government",
    notes: "Wellington city business directory - need to submit application",
  },
  {
    id: 2,
    domain: "palmbeachcondoassociation.org",
    url: "https://palmbeachcondoassociation.org/vendors",
    contactEmail: "vendors@palmbeachcondoassociation.org",
    contactName: "Vendor Relations",
    status: "In Progress",
    domainAuthority: 48,
    category: "Association",
    notes: "Submitted initial application on 6/15, follow up needed",
  },
  {
    id: 3,
    domain: "floridahomeownersresources.com",
    url: "https://floridahomeownersresources.com/service-providers",
    contactEmail: "listings@floridahomeownersresources.com",
    contactName: "Directory Manager",
    status: "Not Started",
    domainAuthority: 45,
    category: "Resource Directory",
    notes: "Requires annual fee of $150 for premium listing",
  },
  {
    id: 4,
    domain: "southfloridabusinessjournal.com",
    url: "https://southfloridabusinessjournal.com/service-providers",
    contactEmail: "editorial@sfbj.com",
    contactName: "Editorial Team",
    status: "In Progress",
    domainAuthority: 68,
    category: "News Publication",
    notes: "Pitched story about property maintenance during hurricane season",
  },
  {
    id: 5,
    domain: "angieslist.com",
    url: "https://angieslist.com/register-business",
    contactEmail: "support@angieslist.com",
    contactName: "Business Support",
    status: "Not Started",
    domainAuthority: 85,
    category: "Review Platform",
    notes: "Need to create business profile and get initial reviews",
  },
]

export default function BacklinksManagement() {
  const [backlinks, setBacklinks] = useState(initialBacklinks)
  const [opportunities, setOpportunities] = useState(backlinksOpportunities)
  const [activeTab, setActiveTab] = useState("existing")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  // New backlink form state
  const [newBacklink, setNewBacklink] = useState({
    domain: "",
    url: "",
    anchorText: "",
    pageTitle: "",
    status: "Active",
    doFollow: true,
    dateAcquired: format(new Date(), "yyyy-MM-dd"),
    domainAuthority: 0,
    category: "",
    notes: "",
  })

  // New opportunity form state
  const [newOpportunity, setNewOpportunity] = useState({
    domain: "",
    url: "",
    contactEmail: "",
    contactName: "",
    status: "Not Started",
    domainAuthority: 0,
    category: "",
    notes: "",
  })

  // Filter backlinks based on search term and status
  const filteredBacklinks = backlinks.filter((backlink) => {
    const matchesSearch =
      backlink.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      backlink.anchorText.toLowerCase().includes(searchTerm.toLowerCase()) ||
      backlink.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = filterStatus === "all" || backlink.status === filterStatus

    return matchesSearch && matchesStatus
  })

  // Filter opportunities based on search term and status
  const filteredOpportunities = opportunities.filter((opportunity) => {
    const matchesSearch =
      opportunity.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = filterStatus === "all" || opportunity.status === filterStatus

    return matchesSearch && matchesStatus
  })

  // Handle adding a new backlink
  const handleAddBacklink = () => {
    const newId = backlinks.length > 0 ? Math.max(...backlinks.map((b) => b.id)) + 1 : 1
    setBacklinks([...backlinks, { ...newBacklink, id: newId }])
    setNewBacklink({
      domain: "",
      url: "",
      anchorText: "",
      pageTitle: "",
      status: "Active",
      doFollow: true,
      dateAcquired: format(new Date(), "yyyy-MM-dd"),
      domainAuthority: 0,
      category: "",
      notes: "",
    })
  }

  // Handle adding a new opportunity
  const handleAddOpportunity = () => {
    const newId = opportunities.length > 0 ? Math.max(...opportunities.map((o) => o.id)) + 1 : 1
    setOpportunities([...opportunities, { ...newOpportunity, id: newId }])
    setNewOpportunity({
      domain: "",
      url: "",
      contactEmail: "",
      contactName: "",
      status: "Not Started",
      domainAuthority: 0,
      category: "",
      notes: "",
    })
  }

  // Handle deleting a backlink
  const handleDeleteBacklink = (id: number) => {
    setBacklinks(backlinks.filter((backlink) => backlink.id !== id))
  }

  // Handle deleting an opportunity
  const handleDeleteOpportunity = (id: number) => {
    setOpportunities(opportunities.filter((opportunity) => opportunity.id !== id))
  }

  // Export backlinks as CSV
  const exportBacklinks = () => {
    const headers = [
      "Domain",
      "URL",
      "Anchor Text",
      "Page Title",
      "Status",
      "DoFollow",
      "Date Acquired",
      "Domain Authority",
      "Category",
      "Notes",
    ]
    const csvContent = [
      headers.join(","),
      ...backlinks.map((backlink) =>
        [
          backlink.domain,
          backlink.url,
          `"${backlink.anchorText}"`,
          `"${backlink.pageTitle}"`,
          backlink.status,
          backlink.doFollow ? "Yes" : "No",
          backlink.dateAcquired,
          backlink.domainAuthority,
          backlink.category,
          `"${backlink.notes}"`,
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `backlinks_export_${format(new Date(), "yyyy-MM-dd")}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Backlink Management</h1>
      <p className="text-gray-600 mb-8">
        Track existing backlinks and manage outreach opportunities to build a strong backlink profile.
      </p>

      <Tabs defaultValue="existing" onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="existing">Existing Backlinks</TabsTrigger>
          <TabsTrigger value="opportunities">Backlink Opportunities</TabsTrigger>
          <TabsTrigger value="add">Add New</TabsTrigger>
        </TabsList>

        {/* Existing Backlinks Tab */}
        <TabsContent value="existing">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="flex gap-2 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search domains, anchor text, or categories..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Lost">Lost</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={exportBacklinks} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domain</TableHead>
                    <TableHead>Anchor Text</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>DA</TableHead>
                    <TableHead>DoFollow</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Date Acquired</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBacklinks.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                        No backlinks found matching your criteria
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredBacklinks.map((backlink) => (
                      <TableRow key={backlink.id}>
                        <TableCell>
                          <div className="font-medium">{backlink.domain}</div>
                          <div className="text-xs text-gray-500 truncate max-w-[200px]">{backlink.url}</div>
                        </TableCell>
                        <TableCell>{backlink.anchorText}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              backlink.status === "Active"
                                ? "default"
                                : backlink.status === "Pending"
                                  ? "outline"
                                  : "destructive"
                            }
                          >
                            {backlink.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{backlink.domainAuthority}</TableCell>
                        <TableCell>{backlink.doFollow ? "Yes" : "No"}</TableCell>
                        <TableCell>{backlink.category}</TableCell>
                        <TableCell>{backlink.dateAcquired}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" asChild>
                              <a href={backlink.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                                <span className="sr-only">Visit</span>
                              </a>
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDeleteBacklink(backlink.id)}>
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Backlink Opportunities Tab */}
        <TabsContent value="opportunities">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="flex gap-2 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search domains or categories..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Not Started">Not Started</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domain</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>DA</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Notes</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOpportunities.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                        No opportunities found matching your criteria
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredOpportunities.map((opportunity) => (
                      <TableRow key={opportunity.id}>
                        <TableCell>
                          <div className="font-medium">{opportunity.domain}</div>
                          <div className="text-xs text-gray-500 truncate max-w-[200px]">{opportunity.url}</div>
                        </TableCell>
                        <TableCell>
                          <div>{opportunity.contactName}</div>
                          <div className="text-xs text-gray-500">{opportunity.contactEmail}</div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              opportunity.status === "Completed"
                                ? "default"
                                : opportunity.status === "In Progress"
                                  ? "outline"
                                  : "secondary"
                            }
                          >
                            {opportunity.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{opportunity.domainAuthority}</TableCell>
                        <TableCell>{opportunity.category}</TableCell>
                        <TableCell className="max-w-[200px] truncate">{opportunity.notes}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" asChild>
                              <a href={opportunity.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                                <span className="sr-only">Visit</span>
                              </a>
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDeleteOpportunity(opportunity.id)}>
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Add New Tab */}
        <TabsContent value="add">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Add New Backlink */}
            <Card>
              <CardHeader>
                <CardTitle>Add New Backlink</CardTitle>
                <CardDescription>Record a new backlink that has been acquired</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="domain">Domain</Label>
                      <Input
                        id="domain"
                        placeholder="example.com"
                        value={newBacklink.domain}
                        onChange={(e) => setNewBacklink({ ...newBacklink, domain: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="domainAuthority">Domain Authority</Label>
                      <Input
                        id="domainAuthority"
                        type="number"
                        placeholder="0-100"
                        value={newBacklink.domainAuthority.toString()}
                        onChange={(e) =>
                          setNewBacklink({ ...newBacklink, domainAuthority: Number.parseInt(e.target.value) || 0 })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="url">URL</Label>
                    <Input
                      id="url"
                      placeholder="https://example.com/page"
                      value={newBacklink.url}
                      onChange={(e) => setNewBacklink({ ...newBacklink, url: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="anchorText">Anchor Text</Label>
                      <Input
                        id="anchorText"
                        placeholder="Anchor text used"
                        value={newBacklink.anchorText}
                        onChange={(e) => setNewBacklink({ ...newBacklink, anchorText: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pageTitle">Page Title</Label>
                      <Input
                        id="pageTitle"
                        placeholder="Title of the linking page"
                        value={newBacklink.pageTitle}
                        onChange={(e) => setNewBacklink({ ...newBacklink, pageTitle: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select
                        value={newBacklink.status}
                        onValueChange={(value) => setNewBacklink({ ...newBacklink, status: value })}
                      >
                        <SelectTrigger id="status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Lost">Lost</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={newBacklink.category}
                        onValueChange={(value) => setNewBacklink({ ...newBacklink, category: value })}
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Local Business">Local Business</SelectItem>
                          <SelectItem value="Local Directory">Local Directory</SelectItem>
                          <SelectItem value="Industry Association">Industry Association</SelectItem>
                          <SelectItem value="News Publication">News Publication</SelectItem>
                          <SelectItem value="Service Directory">Service Directory</SelectItem>
                          <SelectItem value="Blog">Blog</SelectItem>
                          <SelectItem value="Social Media">Social Media</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dateAcquired">Date Acquired</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => {
                              setSelectedDate(date)
                              if (date) {
                                setNewBacklink({ ...newBacklink, dateAcquired: format(date, "yyyy-MM-dd") })
                              }
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2 flex items-end">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="doFollow"
                          checked={newBacklink.doFollow}
                          onChange={(e) => setNewBacklink({ ...newBacklink, doFollow: e.target.checked })}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <Label htmlFor="doFollow">DoFollow Link</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Additional information about this backlink"
                      value={newBacklink.notes}
                      onChange={(e) => setNewBacklink({ ...newBacklink, notes: e.target.value })}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleAddBacklink} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Backlink
                </Button>
              </CardFooter>
            </Card>

            {/* Add New Opportunity */}
            <Card>
              <CardHeader>
                <CardTitle>Add New Opportunity</CardTitle>
                <CardDescription>Track potential backlink opportunities for outreach</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="opp-domain">Domain</Label>
                      <Input
                        id="opp-domain"
                        placeholder="example.com"
                        value={newOpportunity.domain}
                        onChange={(e) => setNewOpportunity({ ...newOpportunity, domain: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="opp-domainAuthority">Domain Authority</Label>
                      <Input
                        id="opp-domainAuthority"
                        type="number"
                        placeholder="0-100"
                        value={newOpportunity.domainAuthority.toString()}
                        onChange={(e) =>
                          setNewOpportunity({
                            ...newOpportunity,
                            domainAuthority: Number.parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="opp-url">Target URL</Label>
                    <Input
                      id="opp-url"
                      placeholder="https://example.com/page"
                      value={newOpportunity.url}
                      onChange={(e) => setNewOpportunity({ ...newOpportunity, url: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="opp-contactName">Contact Name</Label>
                      <Input
                        id="opp-contactName"
                        placeholder="Contact person"
                        value={newOpportunity.contactName}
                        onChange={(e) => setNewOpportunity({ ...newOpportunity, contactName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="opp-contactEmail">Contact Email</Label>
                      <Input
                        id="opp-contactEmail"
                        placeholder="email@example.com"
                        value={newOpportunity.contactEmail}
                        onChange={(e) => setNewOpportunity({ ...newOpportunity, contactEmail: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="opp-status">Status</Label>
                      <Select
                        value={newOpportunity.status}
                        onValueChange={(value) => setNewOpportunity({ ...newOpportunity, status: value })}
                      >
                        <SelectTrigger id="opp-status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Not Started">Not Started</SelectItem>
                          <SelectItem value="In Progress">In Progress</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="opp-category">Category</Label>
                      <Select
                        value={newOpportunity.category}
                        onValueChange={(value) => setNewOpportunity({ ...newOpportunity, category: value })}
                      >
                        <SelectTrigger id="opp-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Local Business">Local Business</SelectItem>
                          <SelectItem value="Local Directory">Local Directory</SelectItem>
                          <SelectItem value="Industry Association">Industry Association</SelectItem>
                          <SelectItem value="News Publication">News Publication</SelectItem>
                          <SelectItem value="Service Directory">Service Directory</SelectItem>
                          <SelectItem value="Government">Government</SelectItem>
                          <SelectItem value="Association">Association</SelectItem>
                          <SelectItem value="Review Platform">Review Platform</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="opp-notes">Notes</Label>
                    <Textarea
                      id="opp-notes"
                      placeholder="Details about this opportunity, outreach strategy, etc."
                      value={newOpportunity.notes}
                      onChange={(e) => setNewOpportunity({ ...newOpportunity, notes: e.target.value })}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleAddOpportunity} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Opportunity
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
