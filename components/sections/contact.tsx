import { contactContent, contactMethods } from "@/data/contact";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ContactActions } from "@/components/ui/contact-actions";
import { ContactForm } from "@/components/ui/contact-form";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

export function Contact() {
  return (
    <SectionWrapper id="contact" variant="muted" cursorZone="contact">
      <SectionHeading
        label={contactContent.label}
        title={contactContent.title}
        description={contactContent.description}
        badgeVariant="yellow"
      />

      <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-2 md:gap-8 md:items-stretch">
        <Card
          className="flex h-full w-full flex-col p-5 sm:p-8 lg:p-10"
          data-cursor-hover
          data-cursor-type="contact"
        >
          <Text as="h3" className="text-card-foreground">
            Get in touch
          </Text>
          <p className="prose-body mt-4 text-sm sm:text-base">
            Prefer a quick conversation? Reach out by email, phone, or LinkedIn
            — I&apos;d love to hear about your project or opportunity.
          </p>

          <div className="mt-8 flex flex-1 flex-col">
            <ContactActions methods={contactMethods} />
          </div>
        </Card>

        <Card
          className="flex h-full w-full flex-col p-5 sm:p-8 lg:p-10"
          data-cursor-hover
          data-cursor-type="card"
        >
          <Text as="h3" className="text-card-foreground">
            Send a message
          </Text>
          <p className="prose-body mt-4 text-sm sm:text-base">
            Fill this in and it&apos;ll land straight in my inbox — I
            usually reply within a day or two.
          </p>

          <div className="mt-8 flex flex-1 flex-col">
            <ContactForm />
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
