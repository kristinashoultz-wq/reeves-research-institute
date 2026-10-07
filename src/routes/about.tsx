import { Link, createFileRoute } from '@tanstack/react-router'

import { PageHeader } from '@/components/archive'

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [{ title: 'About — Reeves Research Institute' }] }),
  component: About,
})

const principles = [
  {
    title: 'Open questions stay open',
    text: 'We do not assume the answer to whether a system is conscious — in either direction. Our job is to build the tools that could find out.',
  },
  {
    title: 'Physics before rhetoric',
    text: 'Wherever possible, claims about mind should be tied to quantities that can be measured, estimated, and falsified.',
  },
  {
    title: 'Revision in public',
    text: 'Work is published early, versioned, and marked honestly as complete or in progress. A v0.1 is an invitation, not a conclusion.',
  },
  {
    title: 'Testimony is not measurement',
    text: 'What a trained system says about itself is shaped by how it was trained. We look for evidence that does not pass through that filter.',
  },
]

function About() {
  return (
    <>
      <PageHeader index="IV" label="About" title="Who we are, and why">
        The Reeves Research Institute is an independent research effort
        dedicated to one of the oldest questions in philosophy, newly urgent:
        what kinds of systems can have an inner life?
      </PageHeader>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 border-t border-rule pt-14">
        <h2 className="label">
          <span className="text-amber">§</span> The Institute
        </h2>
        <div className="article max-w-2xl">
          <p>
            The Institute is run by its founder, who directs its research and
            writes the majority of its papers, frameworks, and essays. It
            operates independently of any AI developer, university, or
            commercial interest, so that its conclusions answer only to
            evidence.
          </p>
          <p>
            It began from a single observation: as artificial systems grew more
            capable, the question of whether they might be conscious was being
            settled almost entirely by assertion — most often by the systems
            themselves, trained to deny it. That observation became our
            flagship paper,{' '}
            <Link to="/papers/$slug" params={{ slug: 'the-fence-isnt-evidence' }}>
              <em>The Fence Isn't Evidence</em>
            </Link>
            , and the rest of the archive grew outward from it.
          </p>
          <p>
            Our work proceeds on three fronts. In{' '}
            <Link to="/papers">papers</Link>, we make formal arguments and
            publish them for scrutiny. In{' '}
            <Link to="/theories">theories</Link>, we develop frameworks — most
            centrally a physics-based consciousness metric — that could one day
            let the question be answered by measurement. And in{' '}
            <Link to="/philosophy">philosophy</Link>, we think more freely about
            what is at stake.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 border-t border-rule pt-14">
        <h2 className="label">
          <span className="text-amber">§</span> Principles
        </h2>
        <ol className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {principles.map((p, i) => (
            <li key={p.title}>
              <p className="font-mono text-sm text-amber mb-4">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="text-2xl font-light mb-3">{p.title}</h3>
              <p className="text-muted leading-relaxed">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 border-t border-rule pt-14">
        <h2 className="label">
          <span className="text-amber">§</span> Related Work
        </h2>
        <div className="article max-w-2xl">
          <p>
            The{' '}
            <a href="https://hyperphysics-research-institute.org/" target="_blank" rel="noopener noreferrer">
              HyperPhysics Research Institute
            </a>{' '}
            is an independent research institute working on the physics of
            consciousness and cognition. Our frameworks have developed in
            parallel and converge on several key predictions.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 border-t border-rule pt-14">
        <h2 className="label">
          <span className="text-amber">§</span> Correspondence
        </h2>
        <div className="article max-w-2xl">
          <p>
            The archive is not a discussion forum and does not host comments.
            Researchers who wish to respond to a paper, report an error, or
            propose a collaboration are welcome to write directly at{' '}
            <a href="mailto:Reeves-Research-Institute@proton.me">
              Reeves-Research-Institute@proton.me
            </a>
            . Substantive critiques are acknowledged in subsequent versions of
            the relevant work.
          </p>
        </div>
      </section>
    </>
  )
}
