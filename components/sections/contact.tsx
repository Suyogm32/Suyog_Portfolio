import { contactContent, contactMethods } from "@/data/contact";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ContactActions } from "@/components/ui/contact-actions";
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

      <div className="flex justify-center">
        <Card
          className="w-full max-w-3xl p-5 sm:p-8 lg:p-12"
          data-cursor-hover
          data-cursor-type="contact"
        >
          <div className="mb-6 text-center sm:mb-10">
            <Text as="h3" className="text-card-foreground">
              Get in touch
            </Text>
            <p className="prose-body mx-auto mt-4 text-sm sm:text-base">
              Prefer a quick conversation? Reach out by email, phone, or LinkedIn
              — I&apos;d love to hear about your project or opportunity.
            </p>
          </div>

          <ContactActions methods={contactMethods} />
        </Card>
      </div>
    </SectionWrapper>
  );
}
