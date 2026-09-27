import { CaseStudyHeader } from '../../components/case-study/CaseStudyHeader/CaseStudyHeader';
import { CaseStudyLayout } from '../../components/case-study/CaseStudyLayout/CaseStudyLayout';
import { ContentBlock } from '../../components/case-study/ContentBlock/ContentBlock';
import { Figure } from '../../components/case-study/Figure/Figure';
import { MoreStories } from '../../components/case-study/MoreStories/MoreStories';
import { Prose } from '../../components/case-study/Prose/Prose';
import { PullQuote } from '../../components/case-study/PullQuote/PullQuote';
import { usePageMeta } from '../../hooks/usePageMeta';

export function PowerUsersPage() {
  usePageMeta({
    title: 'Stop Building Products Only for Power Users',
    description:
      'Why listening only to power users can hold your product back - BlueCat Networks Edge Example.',
  });

  return (
    <CaseStudyLayout>
      <CaseStudyHeader
        byline="By Milijana Smiljanic."
        title={
          <>
            Stop Building Products <br />
            Only for Power Users
          </>
        }
        lede="The Case for User Research"
      />
      <Figure
        src="/images/projects/power-users.webp"
        alt="Illustration of a superhero standing in front of a laptop with a security shield"
        width={800}
        height={733}
        maxHeight={380}
      />

      <Prose>
        <p>
          When building products, it’s easy to fall into a trap: listening only to the loudest voices.
          For many B2B companies, that means product managers (PMs) speaking mostly with power users, the
          experts who know every button, who stretch the product to its limits, and who always have
          strong opinions.
        </p>
        <p>
          The problem? If these voices are your only input, you end up shaping a product around a small
          fraction of your audience. It looks great for advanced users, but it feels complicated and
          overwhelming for everyone else.
        </p>
        <p>I’ve seen this firsthand while working on BlueCat’s Edge product.</p>
      </Prose>

      <ContentBlock title="The Edge Problem">
        <p>
          Edge is a powerful product that helps organizations manage DNS traffic securely at branch
          offices and remote sites. Naturally, its power users, network engineers with deep technical
          expertise, have a lot to say.
        </p>
        <p>
          For a long time, PMs were the ones talking with these users directly, and their conversations
          were full of advanced feature requests.
        </p>
        <p>
          On paper, these sounded like the right things to build. After all, if your most advanced
          customers are asking for it, shouldn’t you deliver?
        </p>
        <p>
          But something didn’t add up. Adoption among less-advanced users lagged. New customers told us
          Edge felt “complicated” and “not intuitive.” They weren’t making it past the first layer of the
          product.
        </p>
        <p>That’s when we brought user research into the picture.</p>
      </ContentBlock>

      <ContentBlock title="What Research Revealed">
        <p>
          By running interviews and usability tests with a broader range of users, not just the power
          users, we uncovered pain points that had been invisible before:
        </p>
        <ul data-spaced>
          <li>
            <strong>Navigation was confusing</strong>. New users struggled to find the most basic
            settings, while power users had long since memorized the paths.
          </li>
          <li>
            <strong>The overview page wasn’t helpful</strong>. Instead of providing a clear
            “at-a-glance” view, it was overloaded with details only advanced users cared about.
          </li>
          <li>
            <strong>Documentation wasn’t enough</strong>. Less-experienced users relied heavily on
            documentation to get started, but the docs couldn’t compensate for poor UX.
          </li>
        </ul>
        <p>In other words, we weren’t failing because the product lacked advanced features.</p>
      </ContentBlock>

      <PullQuote>
        We were failing because <br />
        the basics weren’t working for the majority of users.
      </PullQuote>

      <ContentBlock title="The Shift">
        <p>
          Power users shine a spotlight on the edges of a product. But they can’t show you the full
          picture. Only user research can do that, by capturing a spectrum of voices, validating
          assumptions, and showing how real people interact with your design.
        </p>
        <p>
          For Edge, this shift meant turning a product that felt complicated into one that welcomed more
          users without sacrificing depth. For any team, the lesson is the same:
        </p>
        <ul>
          <li>Talk to power users.</li>
          <li>But also run structured unbiased research.</li>
          <li>And always balance the two.</li>
        </ul>
        <p>That’s how you build products that grow.</p>
      </ContentBlock>

      <ContentBlock title="Final Thoughts">
        <p>
          The biggest takeaway from our Edge experience is simple: when we only talk to power users, we
          forget about everyone else.
        </p>
        <p>
          Power users are invaluable. They stretch the product to its limits, they uncover edge cases, and
          they often predict where the product could go next. But they also represent just a sliver of
          the audience, people who already understand the complexity, who know the workarounds, and who
          rarely struggle with onboarding because they’ve long since passed that stage.
        </p>
        <p>
          When product conversations are limited to this group, the voices of new and less-advanced users
          get lost. Their struggles with navigation, their frustration when documentation doesn’t help,
          their hesitation at an interface that feels intimidating, all of that remains invisible. And in
          the end, it’s these very users who decide whether the product grows. If they can’t get started,
          they churn. If they feel overwhelmed, adoption slows. If they don’t see value quickly, they
          never become power users in the first place.
        </p>
        <p>
          What we learned through research on Edge is that it’s not an either/or. It’s not power users
          versus new users—it’s both. The job of PMs and product teams is to hold that balance: build
          depth for the experts, but also create clarity, simplicity, and confidence for the beginners.
        </p>
        <p>
          User research was the key to rediscovering that balance. By deliberately seeking out
          perspectives beyond the power-user bubble, I uncovered critical gaps that shaped our roadmap and
          improved the experience for everyone.
        </p>
        <p>That’s the real lesson from Edge, and it’s one every product team can apply.</p>
      </ContentBlock>

      <MoreStories projectIds={['edge', 'micetro', 'playbook']} />
    </CaseStudyLayout>
  );
}
