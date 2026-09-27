import { CaseStudyHeader } from '../../components/case-study/CaseStudyHeader/CaseStudyHeader';
import { CaseStudyLayout } from '../../components/case-study/CaseStudyLayout/CaseStudyLayout';
import { ContentBlock } from '../../components/case-study/ContentBlock/ContentBlock';
import { Figure } from '../../components/case-study/Figure/Figure';
import { MoreStories } from '../../components/case-study/MoreStories/MoreStories';
import { Prose } from '../../components/case-study/Prose/Prose';
import { PullQuote } from '../../components/case-study/PullQuote/PullQuote';
import { ReasonList, type Reason } from '../../components/case-study/ReasonList/ReasonList';
import { usePageTitle } from '../../hooks/usePageTitle';

const reasons: readonly Reason[] = [
  {
    shape: 'circle',
    title: 'Forces decisions',
    description: 'The working session turns “nice insights” into committed work.',
  },
  {
    shape: 'diamond',
    title: 'Prevents drift',
    description: 'If it isn’t a ticket with an owner and date, it’s a wish.',
  },
  {
    shape: 'triangle',
    title: 'Scales knowledge',
    description: 'Consistent tickets and links make insights discoverable and reusable.',
  },
  {
    shape: 'square',
    title: 'Proves value',
    description: 'Impact tracking shows what research changed, and what to refine next.',
  },
];

export function PlaybookPage() {
  usePageTitle('My Practical Playbook for Making Research Stick');

  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        byline="By Milijana Smiljanic."
        title="My Practical Playbook for Making Research Stick"
        lede="Research doesn’t ship, your process that turns insights into tickets, owners, and release dates does."
      />

      <Prose>
        <p>
          Most teams don’t suffer from a lack of research. They suffer from research that never
          translates into decisions, ownership, and delivery. After stepping in as the first UX
          researcher, I built a simple but rigorous process that closes the gap between “we learned
          something” and “we shipped something.”
        </p>
        <p>Below is the playbook—lightweight where it should be, prescriptive where it must be.</p>
      </Prose>
      <Figure
        src="/images/articles/playbook-process.webp"
        alt="Flowchart of the research process from roadmap and requests through kickoff, execution, synthesis and delivery"
        width={1600}
        height={885}
        maxHeight={380}
      />

      <ContentBlock title="The process at a glance">
        <ul data-spaced>
          <li>
            <strong>Research roadmap</strong>. A living roadmap, built with PM, Design, and Engineering
            that aligns studies to key initiatives, prioritizing by impact, feasibility, and timing. It’s
            updated as business needs evolve.
          </li>
          <li>
            <strong>Off-roadmap requests.</strong> Urgent asks are welcomed—if they come with a
            hypothesis, the key questions, and why it’s high-value now. We triage by business impact,
            overlap with existing insights, risks of proceeding without research, and available capacity.
            This transparency maximizes value.
          </li>
          <li>
            <strong>Kickoff &amp; plan. </strong>We align scope and goals with PMs, designers, and
            engineers; I draft the plan (goals, methods, participants, deliverables, timelines) and
            circulate it for feasibility and alignment. Everyone knows what we’re investigating and why
            before any sessions begin.
          </li>
          <li>
            <strong>Execution.</strong> We use the right methods, match the target audience, collect data
            ethically, and store notes/recordings consistently so findings are reusable.
          </li>
          <li>
            <strong>Synthesis &amp; reporting</strong>. Findings are distilled into crisp,
            decision-ready insights with recommendations. We present a readout for discussion and
            immediate clarification, then share a concise email summary for the wider group.
          </li>
        </ul>
        <p>Up to here, nothing is unusual. The differentiator is what happens next.</p>
      </ContentBlock>

      <PullQuote>A research report doesn’t change a product, your process does.</PullQuote>

      <ContentBlock title="The “insights-to-action” engine">
        <ul data-spaced>
          <li>
            <strong>STEP 1</strong>
            <br />
            Create a UX ticket per insight. After share out is finidhed, I create a UX ticket for each
            prioritized insight/recommendation so no decision lives only in slides or memory.{' '}
            <strong>
              These tickets become the single source of truth for scope, rationale, and acceptance
              criteria.
            </strong>{' '}
            Outcomes from the session directly guide which tickets exist and how they’re prioritized.
          </li>
          <li>
            <strong>STEP 2</strong>
            <br />
            Working session with owners. After sharing the report, I schedule a working session with
            program managers, PMs, and other stakeholders to jointly review insights, discuss
            recommendations, and decide what we’ll implement—and when.{' '}
            <strong>
              This is the key moment where understanding becomes commitment tied to the delivery
              timeline.
            </strong>
          </li>
          <li>
            <strong>STEP 3</strong>
            <br />
            Link to delivery (BPM/Jira) and assign owners.{' '}
            <strong>
              Program managers connect these UX tickets to the relevant BPM/Jira work items, sequence
              them by impact and feasibility,{' '}
            </strong>
            and assign clear owners for the current or next release depending on scope and capacity.
          </li>
          <li>
            <strong>STEP 4</strong>
            <br />
            <strong>Track impact and close the loop. </strong>I track what shipped, measure outcomes
            (adoption, task success, support reduction) where possible, and capture lessons for both the
            product and the process. This is how research becomes cumulative advantage rather than a
            one-off activity.
          </li>
          <li>
            <strong>STEP 5</strong>
            <br />
            Standardize and scale. Consistent formats, a searchable archive, and lightweight
            self-service testing patterns help the org reuse knowledge and move faster over time.
          </li>
        </ul>
      </ContentBlock>

      <ReasonList title="Why this works?" reasons={reasons} />

      <MoreStories projectIds={['research-budget', 'power-users', 'edge']} />
    </CaseStudyLayout>
  );
}
