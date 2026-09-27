import { CaseStudyHeader } from '../../components/case-study/CaseStudyHeader/CaseStudyHeader';
import { CaseStudyLayout } from '../../components/case-study/CaseStudyLayout/CaseStudyLayout';
import { ContentBlock } from '../../components/case-study/ContentBlock/ContentBlock';
import { Figure } from '../../components/case-study/Figure/Figure';
import { MoreStories } from '../../components/case-study/MoreStories/MoreStories';
import { Prose } from '../../components/case-study/Prose/Prose';
import { PullQuote } from '../../components/case-study/PullQuote/PullQuote';
import { usePageTitle } from '../../hooks/usePageTitle';

export function ResearchBudgetPage() {
  usePageTitle('Conducting User Research With $0 Budget');

  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        byline="By Milijana Smiljanic."
        title={
          <>
            Conducting User Research <br />
            With $0 Budget
          </>
        }
        lede="How I Became Best Friends With Sales, Support, and Success Teams"
      />
      <Figure
        src="/images/projects/research-budget.webp"
        alt="Illustration of a team collaborating around a research board"
        width={800}
        height={538}
        maxHeight={380}
      />

      <Prose>
        <p>
          When I joined my current company, I was stepping into a shoes of being the first user
          researcher ever at a 15+ year-old company. While leadership saw the benefits of having a
          dedicated researcher, the reality was different. They wanted to see the value first before
          investing in proper research tools like UserTesting, Maze, or dscout, or even giving me a
          budget for participant incentives.
        </p>
        <p>
          <strong>So, my budget for research was effectively $0.</strong>
        </p>
        <p>
          The only thing I had access to was Salesforce, which was the tool that customer care team
          used. Through it, I had a huge database of customer contact information. So I thought I had it
          figured out, I reached out to a bunch of them, introducing myself and asking if they’d be
          willing to talk.
        </p>
        <p>
          <strong>
            Guess what happened?
            <br />
            No one replied.
          </strong>
        </p>
        <p>
          And honestly, why would they? We’re a B2B company. Customers didn’t know me, and I was asking
          them to stop doing what they were paid to do in order to give me time. That was never going to
          happen.
        </p>
        <p>So, I had to get creative.</p>
      </Prose>

      <ContentBlock title="The $0 Budget Reality">
        <p>
          When you don’t have research platforms like UserTesting, Maze, or dscout, and you can’t send
          out incentives, doing research feels impossible. But instead of looking at what I didn’t have, I
          leaned into what I did have: the people around me.
        </p>
      </ContentBlock>

      <PullQuote>
        That’s when I realized my biggest research “tool” was building relationships inside the company.
      </PullQuote>

      <ContentBlock title="Becoming Best Friends With Account Managers">
        <p>
          Account Managers were my first stop. They’re constantly talking with people who want to buy our
          product.
        </p>
        <p>
          I started shadowing their calls, not to pitch or sell, but to listen. By doing that, I got
          direct insight into what prospects wanted, what excited them, and what hesitations they had. It
          was raw, unfiltered feedback about why someone might (or might not) buy our product.
        </p>
      </ContentBlock>

      <ContentBlock title="Customer Success Managers (CSMs) As My Secret Door to Real Users">
        <p>
          While AMs gave me the perspective of prospects, CSMs connected me to actual paying customers.
        </p>
        <p>I asked them to do me small favors:</p>
        <ul>
          <li>Invite me into their accruing calls with customers.</li>
          <li>Give me 15 minutes of their meeting time.</li>
          <li>Or, if the timing wasn’t right, help schedule a separate chat.</li>
        </ul>
        <p>
          Those initial calls wasn’t formal user research interview, it was relationship-building. But
          from these sessions, I learned about pain points, feature requests, and even the emotional side
          of using our products.
        </p>
      </ContentBlock>

      <ContentBlock title="Support Engineers: Where Pain Lives">
        <p>
          If you want to understand what’s <em>breaking</em> in your product, talk to support.
          <br />
          Support engineers live in a world of constant firefighting. Sitting down with them gave me
          patterns of recurring issues, misunderstood features, and the “Oh, customers always get stuck
          here” insights. It was like having an instant usability test, without running one.
        </p>
      </ContentBlock>

      <ContentBlock title="Solution Architects: Standing in the Shoes of the User">
        <p>
          When we started working on a brand-new product, I really felt the lack of tools. No
          UserTesting.com, no panel recruiting, no easy access to users.
        </p>
        <p>
          So, I turned to our solution architects. These folks spend their time selling other DDI
          solutions at the company and know exactly what customers are asking for. I asked them to put
          themselves in the customer’s shoes and answer as if they were on the ground.
        </p>
        <p>
          Were they actual users? No.
          <br />
          Did they know the tech inside and out and the real-life customer expectations? Absolutely.
        </p>
        <p>
          And their feedback became a goldmine, especially when compared with what account managers,
          CSMs, and support engineers were saying.
        </p>
      </ContentBlock>

      <ContentBlock title="What I Learned From Doing Research This Way">
        <ol>
          <li>
            <strong>You don’t always need fancy tools.</strong> You need people who are close to your
            users.
          </li>
          <li>
            <strong>Shadowing is underrated</strong>. Sometimes you learn more from listening in on a call
            than you do from a formal interview.
          </li>
          <li>
            <strong>Internal allies are your leverage</strong>. Building trust with AMs, CSMs, support,
            and solution architects meant I always had a new angle on the customer voice.
          </li>
          <li>
            <strong>Creativity matters</strong>. If customers won’t come to you, you find the next best
            proxy, people who talk to them every day.
          </li>
        </ol>
      </ContentBlock>

      <ContentBlock title="Final Thoughts">
        <p>
          Would I love to have a budget for proper user research tools? Of course.
          <br />
          But the truth is, some of the richest insights I’ve gathered came from leaning into human
          connections, not fancy platforms.
        </p>
        <p>
          In a way, being forced to do research without a budget made me better. It pushed me to build
          trust across the organization, find creative workarounds, and prove that you don’t need money to
          start understanding your users, you just need persistence, curiosity, and a little creativity.
        </p>
        <p>
          <strong>And the best part?</strong> Now, those same account managers, CSMs, support engineers,
          and solution architects are proactively reaching out to me whenever they see usability
          problems or opportunities for improvement. Instead of me chasing them, they bring ideas,
          stories, and patterns straight to my desk.
        </p>
        <p>
          Even more, when we needed to do <strong>actual research sessions with customers, </strong>
          those same colleagues helped me schedule calls, or even handed me their own meeting time if
          calendars overlapped. Thanks to their introductions, I was also able to build my own
          relationships with users, so now I can reach out directly.
        </p>
        <p>
          Yes, it sometimes made projects take a bit longer since I was depending on so many moving
          pieces. But in the end, it worked. I still delivered the research, still influenced the
          product, and built lasting partnerships across the company.
        </p>
        <p>
          That shift is powerful. It means user research is no longer something I do alone—it’s
          something the whole organization contributes to. And as a designer and researcher, there’s no
          bigger win than having the company itself become your biggest research ally.
        </p>
      </ContentBlock>

      <MoreStories projectIds={['power-users', 'edge', 'integrity']} />
    </CaseStudyLayout>
  );
}
