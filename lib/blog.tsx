import type React from "react"
interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: React.ReactNode
  date: string
  updatedDate?: string
  readTime: number
  author: string
  category: string
  tags: string[]
  image: string
  featured?: boolean
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    slug: "seasonal-landscaping-tips-for-florida-rental-properties",
    title: "Seasonal Landscaping Tips for Florida Rental Properties",
    excerpt:
      "Discover the best practices for maintaining beautiful landscapes at your rental properties throughout Florida's unique seasons.",
    content: (
      <>
        <p>
          Maintaining attractive landscaping at rental properties in Florida requires understanding the unique climate
          and seasonal changes of the Sunshine State. While Florida doesn't experience the dramatic seasonal shifts seen
          in northern states, there are still important considerations for each time of year.
        </p>

        <h2>Spring (March-May): Preparation and Planting</h2>
        <p>
          Spring in Florida is the ideal time to refresh your rental property's landscaping. The mild temperatures and
          increased rainfall create perfect conditions for new growth.
        </p>
        <ul>
          <li>
            <strong>Fertilize lawns and plants</strong> to prepare them for the growing season
          </li>
          <li>
            <strong>Plant annuals</strong> such as petunias, impatiens, and marigolds for vibrant color
          </li>
          <li>
            <strong>Prune flowering shrubs</strong> after they bloom to encourage healthy growth
          </li>
          <li>
            <strong>Check irrigation systems</strong> to ensure they're working properly before summer heat arrives
          </li>
        </ul>

        <h2>Summer (June-September): Heat and Humidity Management</h2>
        <p>
          Florida summers bring intense heat, humidity, and frequent afternoon thunderstorms. This season requires
          careful attention to prevent landscape damage.
        </p>
        <ul>
          <li>
            <strong>Adjust irrigation schedules</strong> to water deeply but less frequently, encouraging deeper root
            growth
          </li>
          <li>
            <strong>Raise mowing heights</strong> to 3-4 inches to protect grass roots from heat stress
          </li>
          <li>
            <strong>Mulch garden beds</strong> with 2-3 inches of material to retain moisture and suppress weeds
          </li>
          <li>
            <strong>Monitor for pests and diseases</strong>, which thrive in humid conditions
          </li>
        </ul>

        <h2>Fall (October-November): Recovery and Renewal</h2>
        <p>
          As temperatures begin to moderate, fall offers an opportunity to rejuvenate landscapes after the stressful
          summer months.
        </p>
        <ul>
          <li>
            <strong>Overseed lawns</strong> with ryegrass for winter color in North and Central Florida
          </li>
          <li>
            <strong>Plant cool-season annuals</strong> like pansies and snapdragons
          </li>
          <li>
            <strong>Apply a light fertilizer</strong> to help plants recover from summer stress
          </li>
          <li>
            <strong>Trim back overgrown shrubs and trees</strong> to maintain neat appearances
          </li>
        </ul>

        <h2>Winter (December-February): Protection and Planning</h2>
        <p>
          While Florida winters are mild compared to other regions, occasional cold snaps can damage sensitive tropical
          plants.
        </p>
        <ul>
          <li>
            <strong>Protect sensitive plants</strong> with frost cloth during freeze warnings
          </li>
          <li>
            <strong>Reduce irrigation frequency</strong> as plant water needs decrease
          </li>
          <li>
            <strong>Plan landscape improvements</strong> for the coming year
          </li>
          <li>
            <strong>Perform maintenance on equipment</strong> like mowers and trimmers
          </li>
        </ul>

        <h2>Year-Round Maintenance Tips for Rental Properties</h2>
        <p>
          Regardless of the season, some landscaping practices should be maintained consistently at rental properties:
        </p>
        <ul>
          <li>
            <strong>Regular mowing</strong> on a consistent schedule
          </li>
          <li>
            <strong>Edge walkways and beds</strong> for a clean, professional appearance
          </li>
          <li>
            <strong>Remove debris</strong> promptly after storms
          </li>
          <li>
            <strong>Inspect irrigation systems</strong> monthly for leaks or damage
          </li>
          <li>
            <strong>Maintain mulch levels</strong> in planting beds
          </li>
        </ul>

        <h2>Benefits of Professional Landscaping for Rental Properties</h2>
        <p>
          While some property owners manage landscaping themselves, professional services offer significant advantages:
        </p>
        <ul>
          <li>
            <strong>Consistent maintenance</strong> regardless of tenant changes
          </li>
          <li>
            <strong>Expert knowledge</strong> of local plants and conditions
          </li>
          <li>
            <strong>Proper equipment</strong> for efficient maintenance
          </li>
          <li>
            <strong>Quick response</strong> to landscape emergencies
          </li>
          <li>
            <strong>Enhanced property value</strong> and curb appeal
          </li>
        </ul>

        <p>
          At Noble Property Care, we specialize in rental property landscaping throughout Royal Palm Beach and
          surrounding areas. Our comprehensive services ensure your properties maintain attractive, well-maintained
          landscapes year-round, enhancing their value and appeal to quality tenants.
        </p>

        <p>Contact us today to learn more about our customized landscaping maintenance plans for rental properties.</p>
      </>
    ),
    date: "April 15, 2023",
    readTime: 8,
    author: "Frantz Tonico",
    category: "Landscaping",
    tags: ["rental properties", "landscaping", "seasonal maintenance", "Florida", "property management"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rental%20Property%20Landscaping%20%26%20Outdoor%20Care%20-gkDJrt1061XEXGlFKDuIdVxsa3vCzx.png",
    featured: true,
  },
  {
    slug: "essential-commercial-property-maintenance-checklist",
    title: "Essential Commercial Property Maintenance Checklist",
    excerpt:
      "Keep your commercial property in top condition with this comprehensive maintenance checklist covering all critical systems and areas.",
    content: (
      <>
        <p>
          Regular maintenance is crucial for preserving the value and functionality of commercial properties. This
          comprehensive checklist covers essential maintenance tasks to help property owners and managers ensure their
          buildings remain in optimal condition year-round.
        </p>

        <h2>Monthly Maintenance Tasks</h2>
        <ul>
          <li>Inspect HVAC filters and replace as needed</li>
          <li>Check all lighting fixtures and replace burned-out bulbs</li>
          <li>Test emergency lighting systems</li>
          <li>Inspect plumbing fixtures for leaks</li>
          <li>Clean exterior drainage systems</li>
          <li>Inspect parking areas for hazards</li>
          <li>Check security systems and cameras</li>
        </ul>

        <h2>Quarterly Maintenance Tasks</h2>
        <ul>
          <li>Service HVAC systems</li>
          <li>Clean air ducts and vents</li>
          <li>Inspect roof for damage</li>
          <li>Check building exterior for cracks or damage</li>
          <li>Test smoke detectors and fire alarms</li>
          <li>Inspect elevators and escalators</li>
          <li>Clean gutters and downspouts</li>
        </ul>

        <h2>Bi-Annual Maintenance Tasks</h2>
        <ul>
          <li>Deep clean carpets and flooring</li>
          <li>Inspect and service fire extinguishers</li>
          <li>Check and maintain landscaping irrigation systems</li>
          <li>Inspect and clean boilers and water heaters</li>
          <li>Test backup generators</li>
          <li>Inspect building foundation</li>
        </ul>

        <h2>Annual Maintenance Tasks</h2>
        <ul>
          <li>Conduct comprehensive HVAC system maintenance</li>
          <li>Inspect and repair roof as needed</li>
          <li>Repaint exterior surfaces as needed</li>
          <li>Seal parking lot asphalt</li>
          <li>Conduct full electrical system inspection</li>
          <li>Test and inspect fire suppression systems</li>
          <li>Clean exterior windows</li>
        </ul>

        <p>
          Implementing a structured maintenance program based on this checklist can help prevent costly repairs, extend
          the lifespan of building systems, and maintain a safe, attractive environment for tenants and visitors.
        </p>

        <p>
          For professional commercial property maintenance services in Royal Palm Beach and surrounding areas, contact
          Noble Property Care. Our experienced team provides comprehensive maintenance solutions tailored to your
          property's specific needs.
        </p>
      </>
    ),
    date: "June 22, 2023",
    readTime: 6,
    author: "Michael Rodriguez",
    category: "Commercial Maintenance",
    tags: ["commercial property", "maintenance checklist", "property management", "building maintenance"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property%20Maintenance%20%26%20Repairs-vXQVsZq8Newu7BtxaCg8MlNspCTd5f.png",
  },
  {
    slug: "deep-cleaning-vs-regular-cleaning-what-property-managers-need-to-know",
    title: "Deep Cleaning vs. Regular Cleaning: What Property Managers Need to Know",
    excerpt:
      "Understand the differences between deep cleaning and regular cleaning services, and when each is appropriate for your managed properties.",
    content: (
      <>
        <p>
          For property managers, maintaining clean properties is essential for tenant satisfaction and property
          preservation. Understanding the differences between regular cleaning and deep cleaning services can help you
          develop effective cleaning schedules and budgets for your managed properties.
        </p>

        <h2>Regular Cleaning: Maintaining Day-to-Day Cleanliness</h2>
        <p>
          Regular cleaning focuses on maintaining a baseline level of cleanliness through frequent, routine tasks. These
          services typically include:
        </p>
        <ul>
          <li>Vacuuming and mopping floors</li>
          <li>Dusting accessible surfaces</li>
          <li>Cleaning bathrooms (toilets, sinks, mirrors)</li>
          <li>Wiping down kitchen counters and appliance exteriors</li>
          <li>Emptying trash and recycling</li>
          <li>Spot cleaning visible stains</li>
        </ul>

        <p>
          Regular cleaning is performed on a recurring schedule—typically weekly or bi-weekly for residential properties
          and daily or several times weekly for commercial spaces.
        </p>

        <h2>Deep Cleaning: Thorough Rejuvenation</h2>
        <p>
          Deep cleaning is a more comprehensive service that addresses areas often missed during regular cleaning. It
          reaches hidden dirt, grime, and buildup that accumulates over time. Deep cleaning services typically include:
        </p>
        <ul>
          <li>Cleaning behind and under furniture and appliances</li>
          <li>Scrubbing baseboards, door frames, and window sills</li>
          <li>Descaling shower heads and faucets</li>
          <li>Cleaning inside ovens, refrigerators, and other appliances</li>
          <li>Washing walls and ceilings</li>
          <li>Deep carpet cleaning or floor treatments</li>
          <li>Cleaning light fixtures and ceiling fans</li>
          <li>Sanitizing high-touch surfaces</li>
          <li>Cleaning HVAC vents and returns</li>
        </ul>

        <p>
          Deep cleaning is typically performed less frequently—quarterly, bi-annually, or annually—depending on the
          property type and usage.
        </p>

        <h2>When to Schedule Each Type of Cleaning</h2>

        <h3>Regular Cleaning</h3>
        <ul>
          <li>
            <strong>Ongoing maintenance:</strong> Establish a consistent schedule based on property usage
          </li>
          <li>
            <strong>Common areas:</strong> High-traffic areas in multi-unit buildings need frequent attention
          </li>
          <li>
            <strong>Office spaces:</strong> Daily or several times weekly to maintain professional appearances
          </li>
        </ul>

        <h3>Deep Cleaning</h3>
        <ul>
          <li>
            <strong>Tenant turnover:</strong> Between occupants to prepare for new tenants
          </li>
          <li>
            <strong>Seasonal maintenance:</strong> Spring and fall are ideal times for deep cleaning
          </li>
          <li>
            <strong>After renovations:</strong> To remove construction dust and debris
          </li>
          <li>
            <strong>Before special events:</strong> When properties will be showcased to potential tenants or investors
          </li>
          <li>
            <strong>Addressing specific issues:</strong> When allergens, odors, or persistent stains become problematic
          </li>
        </ul>

        <h2>Cost Considerations</h2>
        <p>When budgeting for cleaning services, remember that:</p>
        <ul>
          <li>Regular cleaning costs less per service but occurs more frequently</li>
          <li>Deep cleaning has a higher per-service cost but is performed less often</li>
          <li>Combining both in a strategic schedule provides the best value and results</li>
        </ul>

        <h2>Developing an Effective Cleaning Strategy</h2>
        <p>For property managers, we recommend:</p>
        <ol>
          <li>Establish a consistent regular cleaning schedule for all properties</li>
          <li>Schedule deep cleaning services quarterly or bi-annually</li>
          <li>Always perform deep cleaning during tenant turnover</li>
          <li>Consider property-specific factors like size, usage, and tenant demographics</li>
          <li>Document cleaning procedures and expectations for consistency</li>
        </ol>

        <p>
          At Noble Property Care, we offer customized cleaning solutions for property managers, including both regular
          maintenance cleaning and comprehensive deep cleaning services. Our professional team ensures your properties
          remain in pristine condition, enhancing tenant satisfaction and protecting your investment.
        </p>

        <p>
          Contact us today to discuss your property's specific cleaning needs and develop a maintenance plan that works
          for your budget and requirements.
        </p>
      </>
    ),
    date: "August 10, 2023",
    readTime: 7,
    author: "Sarah Johnson",
    category: "Cleaning",
    tags: ["property management", "cleaning services", "deep cleaning", "maintenance", "tenant turnover"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    slug: "5-ways-preventative-maintenance-saves-property-owners-money",
    title: "5 Ways Preventative Maintenance Saves Property Owners Money",
    excerpt:
      "Discover how implementing a preventative maintenance program can significantly reduce costs and protect your property investment over time.",
    content: (
      <>
        <p>
          For property owners, maintenance expenses represent a significant portion of operating costs. While it might
          be tempting to address issues only as they arise, this reactive approach often leads to higher expenses in the
          long run. Preventative maintenance—regularly scheduled inspections and upkeep—offers substantial financial
          benefits that smart property owners recognize and leverage.
        </p>

        <h2>1. Extends the Lifespan of Building Systems and Components</h2>
        <p>Regular maintenance significantly extends the useful life of virtually all building components:</p>
        <ul>
          <li>
            <strong>HVAC Systems:</strong> Regular filter changes, coil cleaning, and professional tune-ups can extend
            system life by 5-10 years, delaying replacement costs that can range from $5,000 to $20,000 depending on
            building size.
          </li>
          <li>
            <strong>Roofing:</strong> Regular inspections and minor repairs can add 5-7 years to roof lifespan,
            potentially saving $10,000 to $50,000 in premature replacement costs.
          </li>
          <li>
            <strong>Plumbing:</strong> Addressing small leaks and conducting regular inspections prevents major water
            damage that can cost thousands to repair.
          </li>
        </ul>

        <h2>2. Reduces Emergency Repair Costs</h2>
        <p>
          Emergency repairs typically cost 3-4 times more than the same repairs performed during scheduled maintenance
          for several reasons:
        </p>
        <ul>
          <li>After-hours service calls incur premium labor rates</li>
          <li>Rush ordering of parts eliminates the opportunity to compare prices</li>
          <li>Secondary damage often occurs before emergency issues are addressed</li>
        </ul>
        <p>
          For example, a water heater replacement scheduled during regular maintenance might cost $1,200, while the same
          replacement as an emergency (with potential water damage) could exceed $4,000.
        </p>

        <h2>3. Improves Energy Efficiency</h2>
        <p>Well-maintained building systems operate more efficiently, directly reducing utility costs:</p>
        <ul>
          <li>Regular HVAC maintenance can reduce energy consumption by 15-20%</li>
          <li>Properly sealed windows and doors prevent heating/cooling loss</li>
          <li>Clean air filters and ducts improve airflow and reduce system strain</li>
          <li>Calibrated thermostats and controls prevent energy waste</li>
        </ul>
        <p>
          For a typical commercial property, these efficiencies can translate to thousands of dollars in annual utility
          savings.
        </p>

        <h2>4. Minimizes Tenant Turnover</h2>
        <p>Properties with consistent preventative maintenance experience less tenant turnover for several reasons:</p>
        <ul>
          <li>Fewer disruptive emergency repairs</li>
          <li>More comfortable living/working environments</li>
          <li>Perception of professional management and care</li>
          <li>Fewer health and safety concerns</li>
        </ul>
        <p>
          Considering that tenant turnover can cost between $1,000 and $5,000 per unit (including marketing, lost rent,
          and make-ready expenses), reducing turnover through proper maintenance directly improves profitability.
        </p>

        <h2>5. Preserves Property Value</h2>
        <p>
          Perhaps the most significant financial benefit of preventative maintenance is its impact on long-term property
          value:
        </p>
        <ul>
          <li>Well-maintained properties command higher sale prices</li>
          <li>Detailed maintenance records demonstrate proper care to potential buyers</li>
          <li>Properties in good condition qualify for better financing terms</li>
          <li>Regular maintenance prevents the compounding effect of deferred maintenance</li>
        </ul>
        <p>
          Industry studies suggest that properties with documented preventative maintenance programs can sell for 10-15%
          more than comparable properties without such programs.
        </p>

        <h2>Implementing Cost-Effective Preventative Maintenance</h2>
        <p>To maximize the financial benefits of preventative maintenance:</p>
        <ol>
          <li>
            Develop a comprehensive maintenance schedule based on manufacturer recommendations and industry best
            practices
          </li>
          <li>Document all maintenance activities and keep detailed records</li>
          <li>Train staff or hire professionals with specific system expertise</li>
          <li>Use maintenance management software to track schedules and costs</li>
          <li>Analyze maintenance data to identify patterns and optimize your program</li>
        </ol>

        <p>
          At Noble Property Care, we specialize in developing and implementing customized preventative maintenance
          programs for property owners in Royal Palm Beach and surrounding areas. Our comprehensive approach helps
          protect your investment while reducing your total cost of ownership.
        </p>

        <p>
          Contact us today to learn how our preventative maintenance services can help you save money while preserving
          your property's value.
        </p>
      </>
    ),
    date: "October 5, 2023",
    readTime: 9,
    author: "Frantz Tonico",
    category: "Property Maintenance",
    tags: ["preventative maintenance", "cost savings", "property management", "building systems", "property value"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    slug: "preparing-your-rental-property-for-florida-hurricane-season",
    title: "Preparing Your Rental Property for Florida Hurricane Season",
    excerpt: "Essential steps to protect your rental properties before, during, and after hurricane season in Florida.",
    content: (
      <>
        <p>
          Florida's hurricane season, which officially runs from June 1 to November 30, presents significant challenges
          for rental property owners. Proper preparation is essential not only to protect your investment but also to
          ensure the safety of your tenants. This comprehensive guide outlines critical steps for hurricane preparedness
          at your rental properties.
        </p>

        <h2>Before Hurricane Season</h2>

        <h3>Property Inspections and Maintenance</h3>
        <ul>
          <li>
            <strong>Roof inspection:</strong> Check for loose or damaged shingles, tiles, or flashing that could become
            projectiles or allow water intrusion during storms.
          </li>
          <li>
            <strong>Gutter cleaning:</strong> Ensure gutters and downspouts are clear to prevent water backup and
            damage.
          </li>
          <li>
            <strong>Tree trimming:</strong> Remove dead branches and trim trees away from the building, especially those
            near power lines or that could damage the structure.
          </li>
          <li>
            <strong>Window and door assessment:</strong> Verify that all windows and doors seal properly and consider
            installing hurricane shutters or impact-resistant glass if not already present.
          </li>
          <li>
            <strong>Exterior inspection:</strong> Secure or remove items that could become projectiles, including
            outdoor furniture, potted plants, and decorations.
          </li>
        </ul>

        <h3>Documentation and Insurance</h3>
        <ul>
          <li>
            <strong>Insurance review:</strong> Ensure your property insurance adequately covers hurricane damage,
            including wind and flood coverage.
          </li>
          <li>
            <strong>Property documentation:</strong> Maintain updated photos and videos of the property's condition for
            insurance purposes.
          </li>
          <li>
            <strong>Lease agreements:</strong> Review lease agreements to clarify tenant and landlord responsibilities
            during natural disasters.
          </li>
        </ul>

        <h3>Communication with Tenants</h3>
        <ul>
          <li>
            <strong>Hurricane preparedness guide:</strong> Provide tenants with a written guide outlining evacuation
            routes, emergency contacts, and preparation steps.
          </li>
          <li>
            <strong>Emergency contact system:</strong> Establish a reliable communication system to reach tenants
            before, during, and after a storm.
          </li>
          <li>
            <strong>Tenant responsibilities:</strong> Clearly communicate what tenants should do to prepare their
            personal belongings and when to evacuate if necessary.
          </li>
        </ul>

        <h2>When a Hurricane Threatens</h2>

        <h3>Property Preparation</h3>
        <ul>
          <li>
            <strong>Install hurricane shutters:</strong> If your property has removable hurricane shutters, ensure they
            are installed properly.
          </li>
          <li>
            <strong>Secure outdoor items:</strong> Remove or secure all outdoor furniture, decorations, and equipment.
          </li>
          <li>
            <strong>Turn off utilities if evacuating:</strong> Consider turning off water, gas, and electricity if the
            property will be vacant during the storm.
          </li>
          <li>
            <strong>Document property condition:</strong> Take dated photos of the property immediately before the storm
            for insurance purposes.
          </li>
        </ul>

        <h3>Tenant Communication</h3>
        <ul>
          <li>
            <strong>Evacuation information:</strong> Provide updated evacuation orders and route information to tenants.
          </li>
          <li>
            <strong>Check-in system:</strong> Establish a check-in protocol for tenants to confirm their evacuation or
            shelter plans.
          </li>
          <li>
            <strong>Emergency contacts:</strong> Ensure tenants have your emergency contact information and know how to
            report damage.
          </li>
        </ul>

        <h2>After the Hurricane</h2>

        <h3>Property Assessment</h3>
        <ul>
          <li>
            <strong>Safety inspection:</strong> Conduct a thorough inspection for structural damage, gas leaks,
            electrical hazards, and water contamination before allowing tenants to return.
          </li>
          <li>
            <strong>Documentation:</strong> Photograph and document all damage for insurance claims.
          </li>
          <li>
            <strong>Immediate repairs:</strong> Address urgent issues like roof leaks, broken windows, or structural
            damage promptly.
          </li>
          <li>
            <strong>Water extraction:</strong> Remove standing water and begin drying processes immediately to prevent
            mold growth.
          </li>
        </ul>

        <h3>Insurance and Recovery</h3>
        <ul>
          <li>
            <strong>File claims promptly:</strong> Contact your insurance company immediately to begin the claims
            process.
          </li>
          <li>
            <strong>Temporary accommodations:</strong> Work with tenants regarding temporary housing if the property is
            uninhabitable.
          </li>
          <li>
            <strong>Contractor coordination:</strong> Secure reputable contractors for repairs, as demand will be high
            after a major storm.
          </li>
        </ul>

        <h2>Professional Property Management During Hurricane Season</h2>
        <p>
          Many rental property owners find that professional property management services are particularly valuable
          during hurricane season. A property management company can:
        </p>
        <ul>
          <li>Implement comprehensive hurricane preparedness plans</li>
          <li>Coordinate property protection measures when a storm threatens</li>
          <li>Manage tenant communications and evacuation procedures</li>
          <li>Conduct post-storm assessments and coordinate repairs</li>
          <li>Handle insurance claims and documentation</li>
        </ul>

        <p>
          At Noble Property Care, we offer specialized hurricane preparedness and response services for rental property
          owners in Royal Palm Beach and surrounding areas. Our team ensures your properties are properly protected
          before storms and quickly restored afterward, minimizing downtime and financial impact.
        </p>

        <p>
          Contact us today to learn how our property management services can help you navigate hurricane season with
          confidence and protect your valuable real estate investments.
        </p>
      </>
    ),
    date: "May 18, 2023",
    readTime: 10,
    author: "Sarah Johnson",
    category: "Property Management",
    tags: ["hurricane preparedness", "rental properties", "Florida", "property protection", "tenant safety"],
    image: "/placeholder.svg?height=600&width=800",
  },
]

// Get all blog posts
export function getBlogPosts() {
  return blogPosts
}

// Get a single blog post by slug
export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

// Get related posts based on category
export function getRelatedPosts(currentSlug: string, category: string, limit = 3) {
  return blogPosts.filter((post) => post.slug !== currentSlug && post.category === category).slice(0, limit)
}

// Get posts by category
export function getPostsByCategory(category: string) {
  return blogPosts.filter((post) => post.category === category)
}

// Get featured posts
export function getFeaturedPosts(limit = 3) {
  return blogPosts.filter((post) => post.featured).slice(0, limit)
}

// Get recent posts
export function getRecentPosts(limit = 5) {
  // Sort by date (assuming date format is consistent)
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit)
}

// Search posts
export function searchPosts(query: string) {
  const searchTerm = query.toLowerCase()
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
      post.category.toLowerCase().includes(searchTerm),
  )
}
