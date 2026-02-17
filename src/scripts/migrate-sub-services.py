import os
import re

ROOT = "/Users/rockson61/Downloads/Indira Hospital/src/app/services"

TEMPLATE = """import { Metadata } from "next";
import { SubServiceTemplate } from "@/components/healthcare/SubServiceTemplate"

export const metadata: Metadata = {
  title: "__TOPIC__ | Indira Super Speciality Hospital Vellore",
  description: "Advanced __TOPIC__ at Indira Super Speciality Hospital, Vellore. Expert care with high success rates and affordable costs."
};

export default function __CLASSNAME__Page() {
  return (
    <SubServiceTemplate
      title="__TOPIC__"
      eyebrow="__CLUSTER__ Treatment"
      description={
        <p>
          __TOPIC__ at Indira Super Speciality Hospital is performed by experienced specialists to provide high-quality medical outcomes with a focus on patient safety and affordable care.
        </p>
      }
      quickFacts={[
        { label: "Cost", value: "₹X,XXX – ₹X,XXX" },
        { label: "Duration", value: "X Minutes" },
        { label: "Recovery", value: "X Days" },
        { label: "Success Rate", value: "95%+" }
      ]}
      relatedServices={{
        serviceSlug: "__SLUG__",
        related: [
          { title: "All __CLUSTER__ Services", href: "/services/__LOWER_CLUSTER__" }
        ]
      }}
      reviews={{
        entityName: "__TOPIC__",
        entitySlug: "__SLUG__"
      }}
    >
      <section>
        <h2>What is __TOPIC__?</h2>
        <p>
          TODO: Comprehensive explanation of __TOPIC__ and its benefits for patients. __TOPIC__ is a specialized treatment offered at our Vellore facility.
        </p>
        
        <h2>Who Needs This Treatment?</h2>
        <p>
          TODO: Patient criteria and symptoms that indicate a need for __TOPIC__. Consult with our specialists to determine if this is the right treatment for you.
        </p>
        
        <h2>Cost & Payment Options</h2>
        <p>
          <strong>Cost: ₹X,XXX – ₹X,XXX</strong> at Indira Super Speciality Hospital, Vellore.
          We offer 50% lower costs than Chennai/Bangalore with 0% EMI options available via major banks.
        </p>
      </section>
    </SubServiceTemplate>
  );
}
"""

def to_class_name(s):
    # Remove special characters and capitalize words
    clean = re.sub(r'[^a-zA-Z0-9\s-]', '', s)
    return "".join(word.capitalize() for word in re.split(r'[\s-]+', clean))

def migrate():
    count = 0
    for root, dirs, files in os.walk(ROOT):
        # Skip the root services page itself
        if root == ROOT:
            continue
            
        for file in files:
            if file == "page.tsx":
                path = os.path.join(root, file)
                
                # Extract relative path for slug
                rel_path = os.path.relpath(path, ROOT)
                slug = rel_path.replace("/page.tsx", "")
                
                # Skip the catch-all route [...slug]
                if "[...slug]" in slug:
                    continue
                    
                with open(path, 'r') as f:
                    content = f.read()
                
                # Skip already migrated
                if "SubServiceTemplate" in content:
                    print(f"Skipping (already migrated): {path}")
                    continue
                
                # Extract topic and cluster from comments
                m_topic = re.search(r"// Topic: (.*)", content)
                m_cluster = re.search(r"// Cluster: (.*)", content)
                
                if m_topic and m_cluster:
                    topic = m_topic.group(1).strip()
                    cluster = m_cluster.group(1).strip()
                    className = to_class_name(topic)
                    
                    new_content = TEMPLATE.replace("__TOPIC__", topic)
                    new_content = new_content.replace("__CLUSTER__", cluster.capitalize())
                    new_content = new_content.replace("__LOWER_CLUSTER__", cluster.lower())
                    new_content = new_content.replace("__SLUG__", slug)
                    new_content = new_content.replace("__CLASSNAME__", className)
                    
                    with open(path, 'w') as f:
                        f.write(new_content)
                    print(f"Migrated: {path}")
                    count += 1
                else:
                    print(f"Could not find metadata in: {path}")
    
    print(f"\nDone! Migrated {count} pages.")

if __name__ == "__main__":
    migrate()
