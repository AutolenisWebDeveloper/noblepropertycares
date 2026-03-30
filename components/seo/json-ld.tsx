import { Fragment } from "react"

interface JsonLdProps {
  data: Record<string, any> | Record<string, any>[]
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data),
        }}
      />
    </Fragment>
  )
}
