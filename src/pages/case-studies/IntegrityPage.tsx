import { CaseStudyHeader } from '../../components/case-study/CaseStudyHeader/CaseStudyHeader';
import { CaseStudyLayout } from '../../components/case-study/CaseStudyLayout/CaseStudyLayout';
import { ContentBlock } from '../../components/case-study/ContentBlock/ContentBlock';
import { MetricGrid, type Metric } from '../../components/case-study/MetricGrid/MetricGrid';
import { Prose } from '../../components/case-study/Prose/Prose';
import { SectionTitle } from '../../components/case-study/SectionTitle/SectionTitle';
import { SummaryBand } from '../../components/case-study/SummaryBand/SummaryBand';
import { TeamStructure } from '../../components/case-study/TeamStructure/TeamStructure';
import { usePageTitle } from '../../hooks/usePageTitle';

const metricColumns: readonly (readonly Metric[])[] = [
  [
    {
      type: 'stat',
      value: '93%',
      tone: 'pink',
      label: 'Reported a positive or very positive experience',
      note: 'Comparing to previous versions.',
    },
    {
      type: 'stat',
      value: '86%',
      tone: 'yellow',
      label: 'Found having external access to Prometheus/Grafana very useful',
    },
    {
      type: 'list',
      heading: 'Most valuable features:',
      tone: 'teal',
      items: [
        { value: '64%', label: 'Thee‑view + advanced tables' },
        { value: '57%', label: 'UI/UX enhancements' },
        { value: '50%', label: 'Quick Search' },
      ],
    },
  ],
  [
    {
      type: 'stat',
      value: '66%',
      tone: 'purple',
      label: 'Reported the new navigation, and menu are intuitive.',
      note: 'Comparing to previous versions.',
    },
    {
      type: 'stat',
      value: '60%',
      tone: 'green',
      label: 'Called CSV import / export time saving.',
      note: '40% haven’t tried it yet.',
    },
    {
      type: 'list',
      heading: 'Least valuable features:',
      tone: 'red',
      items: [
        { value: '71%', label: 'Built‑in multilingual' },
        { value: '36%', label: 'Support bundle' },
        { value: '29%', label: 'Backup / Restore' },
      ],
    },
  ],
  [
    {
      type: 'stat',
      value: '53%',
      tone: 'teal',
      label: 'Noticed Integrity have URL↔API alignment',
      note: 'While 1 in 4, have already automated some task.',
    },
    {
      type: 'stat',
      value: '93%',
      tone: 'blue',
      label: 'Rated translations at least moderately accurate',
      note: 'Localization accuracy.',
    },
    { type: 'stat', value: '100%', tone: 'pink', label: 'Integrity is DDI winner', inline: true },
  ],
];

export function IntegrityPage() {
  usePageTitle('Integrity X, Beta Users First-Impressions Study');

  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        title={
          <>
            Integrity X, Beta Users <br />
            First-Impressions Study
          </>
        }
        lede="A rapid yet rigorous study that blended quantitative questions with open‑ended feedback from beta users to confirm what’s a “winner” in the new UI, and where to invest the next iteration."
      />

      <SummaryBand
        items={[
          {
            title: 'Summary',
            content:
              'A fast, mixed‑method survey with beta users validated the redesign, surfaced performance priorities, clarified automation readiness, and aligned the roadmap. I combined lightweight quant (rankings/ratings) with open‑ended prompts for context. The result: high confidence to ship, with a focused set of next‑iteration bets.',
          },
          {
            title: 'My Role',
            content: (
              <>
                <strong>Lead UX Researcher, </strong>wrote the survey, ran analysis (quant + thematic
                qual), synthesized findings, and aligned decisions with PM/Design/Eng/Support.
              </>
            ),
          },
        ]}
      />

      <TeamStructure members={['Lead UX Research', 'UX Designer', 'Product Manager', 'Marketing Team']} />

      <SectionTitle>Context &amp; Objectives</SectionTitle>
      <Prose>
        <p>
          Integrity X (25.1) introduced a refreshed navigation model, visible API hooks, and always‑on
          metrics. We needed to quickly:
        </p>
        <ol>
          <li>Validate whether the new UI is genuinely faster and clearer;</li>
          <li>Understand automation awareness and early usage;</li>
          <li>Identify which metrics matter most;</li>
          <li>Stress‑test operational features (Backup/Restore, Support bundle, CSV);</li>
          <li>Check localization and accessibility basics.</li>
        </ol>
      </Prose>

      <ContentBlock title="Participants & Method">
        <p>
          <strong>Participants</strong>
          <br />
          Beta users from enterprise environments (admins/engineers across DNS, DHCP, IPAM).
        </p>
        <p>
          <strong>Method</strong>
          <br />
          Mixed‑method survey, Likert ratings and value ranking + open questions for “why/how”.
        </p>
        <p>
          <strong>Analysis</strong>
          <br />
          Percentages and rank order for signals; rapid thematic coding to explain drivers and edge
          cases.
        </p>
      </ContentBlock>

      <MetricGrid title="At‑a‑Glance Metrics" columns={metricColumns} />

      <ContentBlock title="What We Learned Based On Numbers?">
        <p>
          <strong>UI &amp; Navigation</strong>
          <br />
          The new navigation, advanced tables, and searchable tree‑view reduce steps and errors. Main
          friction: search/load performance on large data sets and a desire for light personalization.
        </p>
        <p>
          <strong>API &amp; Automation</strong>
          <br />
          What we learned: Users recognize URL↔API alignment; some already automate
          (Postman→PowerShell/Python). Many plan to expand usage.
        </p>
        <p>
          <strong>Metrics &amp; Monitoring</strong>
          <br />
          Always‑on metrics are valuable; Prometheus/Grafana access is broadly useful.
          <br />
          Gaps: historical trends, alerting/anomaly detection, deeper DHCP/DNS insights,
          API/failed‑login/IP allocation stats, XHA health.
        </p>
        <p>
          <strong>Backup/Restore, Support Bundle, CSV</strong>
          <br />
          Discoverability/naming of Support bundle could be clearer. CSV saves time; some haven’t tried
          it yet.
        </p>
        <p>
          <strong>Localization &amp; Accessibility</strong>
          <br />
          Translations are broadly accurate; A11y gaps remain (keyboard reach, header contrast).
          Multilingual is low value in English‑only teams but important for global orgs.
        </p>
      </ContentBlock>

      <SectionTitle>Outcomes</SectionTitle>
      <Prose>
        <p>
          <strong>Decision confidence</strong>
          <br />
          Clear “keep/refine” signals on navigation and tables; focused performance bets for the next
          iteration
        </p>
        <p>
          <strong>Engineering buy‑in</strong>
          <br />
          Concrete, prioritized problems (e.g., search at scale, XHA visibility) translated smoothly into
          backlog items.
        </p>
      </Prose>

      <SectionTitle>UXR Next Steps</SectionTitle>
      <Prose>
        <ol>
          <li>Targeted usability checks on search/DNS at scale with time‑to‑task metrics.</li>
          <li>Alerting/trends MVP → measure adoption and incident reduction.</li>
          <li>Post‑launch research: broadened evaluation of real‑world usage and habituation.</li>
        </ol>
        <ul>
          <li>
            <strong>Objectives</strong>: track adoption &amp; feature usage (search, metrics, alerting,
            backup/restore), time‑to‑task and error rates, API automation uptake, A11y effectiveness in
            day‑to‑day work, perceived reliability, CSAT/NPS, and support/incident trends vs. pre‑launch.
          </li>
          <li>
            <strong>Method: </strong>product analytics + 1:1 interviews across cohorts (new vs
            experienced, English‑only vs multilingual, power vs general users).
          </li>
          <li>
            <strong>Outcomes:</strong> keep/tweak/retire decisions, prioritized backlog for 26.1 ; 26.2
            enablement/content gaps, refreshed ROI metrics.
          </li>
        </ul>
      </Prose>
    </CaseStudyLayout>
  );
}
