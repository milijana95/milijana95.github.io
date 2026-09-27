import { CaseStudyHeader } from '../../components/case-study/CaseStudyHeader/CaseStudyHeader';
import { CaseStudyLayout } from '../../components/case-study/CaseStudyLayout/CaseStudyLayout';
import { ContentBlock } from '../../components/case-study/ContentBlock/ContentBlock';
import { Figure } from '../../components/case-study/Figure/Figure';
import { Prose } from '../../components/case-study/Prose/Prose';
import { PullQuote } from '../../components/case-study/PullQuote/PullQuote';
import { SectionTitle } from '../../components/case-study/SectionTitle/SectionTitle';
import { SummaryBand } from '../../components/case-study/SummaryBand/SummaryBand';
import { TeamStructure } from '../../components/case-study/TeamStructure/TeamStructure';
import { usePageMeta } from '../../hooks/usePageMeta';

export function EdgePage() {
  usePageMeta({
    title: 'Edge UX Optimization',
    description:
      'Users told us Edge felt complicated. I listened, tested, and shared design recommendations to simplify their journey.',
  });

  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        title="Edge UX Optimization"
        lede="Imagine opening Netflix and first thing you see is your watchlist, but that’s it — no buttons, no actions, just posters to look at. That’s what Edge’s overview page felt like to it’s users: nice to look at, but not useful when you actually needed to get something done."
      />

      <SummaryBand
        items={[
          {
            title: 'Problem Statement',
            content: (
              <>
                <strong>Customers described Edge as complicated and difficult to navigate.</strong>{' '}
                Key tasks were scattered, forcing users to jump back and forth, and documentation felt
                disconnected.
              </>
            ),
          },
          {
            title: 'Opportunity',
            content: (
              <>
                By rethinking the experience as a whole,{' '}
                <strong>
                  we had the chance to simplify workflows, reduce friction, and make Edge more inclusive
                  for all users.
                </strong>
              </>
            ),
          },
          {
            title: 'My Role',
            content: (
              <>
                <strong>Led end-to-end research,</strong> from defining goals and creating the research
                plan, to executing studies and translating insights into actionable product
                recommendations
              </>
            ),
          },
        ]}
      />

      <TeamStructure members={['Lead UX Research', 'UX Designer', 'Product Manager', 'Engineering Manager']} />

      <SectionTitle>Approach &amp; Process</SectionTitle>
      <Prose>
        <p>Edge was known as powerful but overwhelming. In collaboration with PMs, I set out to:</p>
        <ul>
          <li>Identify and address the navigation challenges, especially within the left panel.</li>
          <li>Evaluate the value of Overview Page to determine if it should be kept, redesigned, or removed.</li>
          <li>
            Understand how users interacted with the Security and Report tabs, uncovering difficulties
            and opportunities to make them more user-friendly.
          </li>
        </ul>
        <p>
          My role was to transform these scattered frustrations into a structured research process that
          shaped design and roadmap decisions.
        </p>
      </Prose>
      <Figure
        src="/images/edge/process.webp"
        alt="Edge research process: discovery, alignment, research plan, conducting research, synthesis and reporting"
        width={1600}
        height={781}
      />

      <ContentBlock title="Steps 1 & 2. Discovery, Alignment & Research Plan">
        <p>
          Reviewed existing PM notes and hypotheses about navigation, overview page, and documentation.
          Then held stakeholder interviews to capture their questions, and to understand their
          concerns.. Based on our meetings I created user research plan, and defined clear research
          goals with a focus on simplifying the overall user experience.
        </p>
      </ContentBlock>

      <ContentBlock title="3. Conducting Research & Methodology">
        <p>
          I chose a mixed method approach because no single method could capture the complexity of
          Edge’s usage.
        </p>
      </ContentBlock>

      <ContentBlock eyebrow="User Interviews">
        <p>
          During interviews, I spoke with a mix of experienced power users and first-time users.{' '}
          <strong>Power users showed me how they rely on Edge daily</strong>, while{' '}
          <strong>new users revealed where onboarding and discoverability completely broke down.</strong>
        </p>
        <p>
          One of the clearest themes that emerged during user interviews was around the Overview Page.
          While it was originally designed to give users a starting point, both new and experienced
          users consistently told us it didn’t deliver real value.
        </p>
      </ContentBlock>

      <ContentBlock
        eyebrow="Concept Value Testing"
        aside={
          <Figure
            src="/images/edge/quad.webp"
            alt="Quad map presenting the relationship between need fulfillment and intended usage frequency"
            width={839}
            height={580}
          />
        }
      >
        <p>
          To take this insight further, I designed a <strong>Concept Value Test</strong>. After finishing
          the interviews, I sent a survey to all participants where we listed potential dashboard widgets
          (e.g., service health, traffic anomalies, active sites). Later w mapped responses into a quad
          map to visualize priorities.
        </p>
        <ul>
          <li>
            <strong>Critical health widgets </strong>ranked highest (high value + frequent use).
          </li>
          <li>
            <strong>Upgrade transparency</strong> widget ranked high in value, even if used less often.
          </li>
          <li>
            <strong>Vanity widgets</strong> (like top domains) landed lowest.
          </li>
        </ul>
      </ContentBlock>

      <PullQuote>
        Overview page was <br />
        “nice to look at but useless,”
      </PullQuote>
      <Prose>
        <p>
          It became clear that users weren’t asking for a prettier overview — they wanted a proactive
          dashboard that told them, at a glance, if something was wrong and where to act.
        </p>
      </Prose>

      <ContentBlock title="4. Analyzing & Synthesizing">
        <p>Research only matters if teams can act on it. I made sure the insights were clear, and prioritized:</p>
        <ul>
          <li>Affinity-mapped data into themes (navigation, overview, security, reporting, onboarding).</li>
          <li>Applied a severity scale to rank problems by impact (SEV 3 - delighter; SEV 0 - major issue)</li>
          <li>Reframed problems into “How might we…” opportunities for design.</li>
        </ul>
      </ContentBlock>

      <ContentBlock title="5. Reporting & Knowledge Sharing">
        <p>I delivered findings in multiple formats:</p>
        <ul>
          <li>
            A structured report with <strong>executive summary, quotes, and videos.</strong>
          </li>
          <li>
            Ran live readout with <strong>leadership team, ENG teams, PMs and designers, </strong>to
            connect insights to backlog decisions.
          </li>
          <li>
            <strong>Hosted, a knowledge-sharing session with CSMs</strong>, where I presented interview
            statements and they validated them against weekly customer conversations.
          </li>
        </ul>
      </ContentBlock>

      <SectionTitle>Outcomes &amp; Shipped Changes</SectionTitle>
      <ContentBlock title="Overview Page → Proactive Dashboard">
        <Figure
          src="/images/edge/dashboard.webp"
          alt="Outcomes: the overview page before and after becoming a proactive dashboard"
          width={1600}
          height={562}
        />
      </ContentBlock>
      <ContentBlock title="Simplified Service Flows">
        <Figure
          src="/images/edge/service-flows.webp"
          alt="Simplified service flows before and after the redesign"
          width={1600}
          height={588}
        />
      </ContentBlock>
      <ContentBlock title="Other Proposed Improvements">
        <ul>
          <li>Breadcrumbs and split-views reduced context switching.</li>
          <li>Security tab should provide more transparency and clearer error messages.</li>
          <li>Reports should be redesign as whole, and users need more customization.</li>
          <li>Onboarding need more guided tutorials and contextual tooltips.</li>
        </ul>
      </ContentBlock>
    </CaseStudyLayout>
  );
}
