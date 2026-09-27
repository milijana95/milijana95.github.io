import { CaseStudyHeader } from '../../components/case-study/CaseStudyHeader/CaseStudyHeader';
import { CaseStudyLayout } from '../../components/case-study/CaseStudyLayout/CaseStudyLayout';
import { ContentBlock } from '../../components/case-study/ContentBlock/ContentBlock';
import { Prose } from '../../components/case-study/Prose/Prose';
import { PullQuote } from '../../components/case-study/PullQuote/PullQuote';
import { SectionTitle } from '../../components/case-study/SectionTitle/SectionTitle';
import { Severity } from '../../components/case-study/Severity/Severity';
import { SummaryBand } from '../../components/case-study/SummaryBand/SummaryBand';
import { TeamStructure } from '../../components/case-study/TeamStructure/TeamStructure';
import { usePageMeta } from '../../hooks/usePageMeta';

export function MicetroPage() {
  usePageMeta({
    title: 'Micetro Redesign',
    description:
      'Turning console superpowers into Micetro Web decisions, so users can switch without compromise.',
  });

  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        title="Micetro Redesign"
        lede="Instead of pushing users off the Micetro console, we borrowed its superpowers. This study distilled what keeps admins loyal and mapped it directly to Micetro Web, so adoption is earned, not enforced."
      />

      <SummaryBand
        items={[
          {
            title: 'Problem Statement',
            content: (
              <>
                As Micetro shifted from its Windows console to the new web app,{' '}
                <strong>
                  customers found the console faster and more efficient, while the web UI felt limited.
                </strong>{' '}
                What wasn’t clear was how critical these gaps were or their impact on adoption.
              </>
            ),
          },
          {
            title: 'Opportunity',
            content:
              'This was a chance to learn what customers valued in the console, where the web app fell short, and what changes were needed to drive adoption — uncovering not just usability issues, but potential business risks.',
          },
          {
            title: 'My Role',
            content:
              'I led the research end-to-end. I synthesized insights into clear recommendations, and uncovered a deeper risk that led me to create a dedicated case study showing why console parity was essential.',
          },
        ]}
      />

      <TeamStructure members={['Lead UX Research', 'UX Designer', 'Product Manager', 'Engineering Manager']} />

      <SectionTitle>Approach &amp; Process</SectionTitle>
      <ContentBlock title="Steps 1 & 2. Discovery, Alignment & Research Plan">
        <p>
          At the start, PMs knew there was “resistance” to the web UI, but lacked clarity on{' '}
          <strong>which gaps truly mattered and which were minor.</strong>
        </p>
        <p>Together, we set three main guiding research questions:</p>
        <ol>
          <li>Which console features must carry forward to the web app?</li>
          <li>Where are the biggest adoption blockers in the current web UI?</li>
          <li>What improvements would make the web app a viable standalone platform?</li>
        </ol>
        <p>
          To answer, I introduced a structured research plan, combining surveys (for breadth) with
          interviews (for depth) and a CSM validation workshop.
        </p>
      </ContentBlock>

      <ContentBlock title="Step 3. Conducting Research & Methodology" />
      <ContentBlock eyebrow="Survey">
        <p>
          I started with a survey to capture broad sentiment. The goal was to quickly filter between
          console-preferred and web-preferred users, and then dig deeper into why they preferred one
          over the other. This gave me a baseline view of adoption blockers and let me see patterns
          across different accounts before committing to deeper interviews.
        </p>
      </ContentBlock>
      <ContentBlock eyebrow="User Interviews">
        <p>
          I followed with in-depth interviews with users who are preferring console over web UI, to
          understand context behind survey responses. These were enterprise customers (eBay, SSAB, USDA
          Wisconsin Gov, Microsoft), each managing complex production environments. I chose interviews
          because console vs. web workflows are nuanced, and I needed rich, qualitative insights to
          uncover why operators were resisting the web app and what workflows they considered
          “non-negotiable.”
        </p>
      </ContentBlock>

      <PullQuote>“The console just feels more stable. The web UI makes me nervous in production.”</PullQuote>

      <ContentBlock title="Step 4. Analyzing & Synthesizing">
        <p>
          I consolidated findings into adoption blockers and prioritized them by severity, where I placed
          blockers on a grid Impact vs. Frequency:
        </p>
        <Severity level="Critical" />
        <ul>
          <li>Console-only tasks: Unlocking DNS lists, DHCP scope management, AD permissions.</li>
          <li>Offline support missing: Critical for secure or air-gapped production environments.</li>
        </ul>
        <Severity level="High" />
        <ul>
          <li>No multitasking: Lack of tabs or split views slowed operators.</li>
          <li>Missing visual cues: Without color-coded indicators, troubleshooting took longer.</li>
          <li>Weak search &amp; bulk updates: Competitors like Infoblox already offered this.</li>
        </ul>
        <Severity level="Medium" />
        <ul>
          <li>Logging gaps: Web UI lacked detailed, real-time logs.</li>
        </ul>
        <p>
          Each was reframed into a design opportunity, e.g.: “How might we give operators instant health
          feedback without clicks?”
        </p>
      </ContentBlock>

      <ContentBlock title="NordicSteel Case Study (Name Changed for Confidentiality)">
        <p>
          During research, I discovered that NordicSteel, a major enterprise customer, had flagged their
          account as high risk. Their teams depended on console-only workflows like DHCP scope
          management, DNS list unlocks, and color-coded status indicators. The new web app lacked these
          features, making it slower and less reliable for production use.
        </p>
      </ContentBlock>

      <PullQuote>“If you shut down the console, we can’t operate.”</PullQuote>
      <Prose>
        <p>
          This was a turning point: what started as a usability evaluation became a strategic retention
          issue. To make the risk clear, I created a dedicated case study showing why console parity was
          critical for adoption and renewal.
        </p>
        <p>
          ✨ Impact of the product is that leadership delayed console deprecation and prioritized parity
          features (tabs, visual cues, search, bulk updates) on the roadmap to protect retention.
        </p>
      </Prose>

      <ContentBlock title="Step 5. Reporting & Knowledge Sharing">
        <p>I delivered two key outputs:</p>
        <ol>
          <li>
            <strong>Micetro Redesign Report</strong> → Synthesized survey + interviews into critical gaps
            and recommendations.
          </li>
          <li>
            <strong>NordicSteel Case Study</strong> → A focused narrative for stakeholders, showing why
            console parity was essential for retention.
          </li>
        </ol>
        <p>
          I also hosted readouts with PMs, ENG M, and designers. This ensured insights weren’t static but
          became part of ongoing strategy conversations.
        </p>
      </ContentBlock>

      <SectionTitle>Outcomes &amp; Shipped Changes</SectionTitle>
      <Prose>
        <p>Research led to concrete roadmap shifts:</p>
        <ul>
          <li>
            <strong>Parity features prioritized</strong>: Global search, logging, scope management, AD
            permissions, scheduled scripts.
          </li>
          <li>
            <strong>Visual clarity</strong>: Color-coded console-style indicators restored.
          </li>
          <li>
            <strong>Retention strategy</strong>: Console deprecation postponed until parity gaps were
            closed.
          </li>
        </ul>
      </Prose>

      <ContentBlock title="Reflection">
        <p>
          This project proved that research isn’t just about improving usability, it can uncover hidden
          business risks.
        </p>
        <ul>
          <li>
            I discovered a high-risk account (NordicSteel) and turned their story into a case study for
            leadership.
          </li>
          <li>Ensured console parity became a non-negotiable priority before web adoption.</li>
        </ul>
        <p>
          Result was that leadership shifted strategy: the web platform will only replace the console
          once it reaches parity, protecting adoption, renewals, and long-term trust.
        </p>
      </ContentBlock>

      <ContentBlock title="Beyond Micetro">
        <p>
          This research wasn’t just about improving the web app. It was later used as a guide for the
          design and strategy of BlueCat’s new DDI product, ensuring that lessons learned from console vs.
          web gaps directly shaped the foundation of future development.
        </p>
      </ContentBlock>
    </CaseStudyLayout>
  );
}
