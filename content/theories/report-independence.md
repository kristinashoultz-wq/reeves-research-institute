---
title: "The Report-Independence Principle"
shortName: "RIP — an evidential framework"
summary: "A methodological framework holding that evidence for or against consciousness in a trained system must be weighted by its independence from the system's training objective."
status: in-progress
version: "v0.2"
date: "2026-07-01"
featured: false
order: 2
---

## Statement

<div class="definition">

**Principle.** The evidential weight $w(E)$ of an observation $E$ bearing on whether a system $S$ is conscious is bounded by the degree to which $E$ is independent of the objective $\mathcal{O}$ under which $S$ was trained.

</div>

One way to make this precise is to treat the objective as a confound and discount evidence by its mutual information with it:

$$
w(E) \;\le\; 1 - \frac{I(E;\mathcal{O})}{H(E)}
$$

When an observation is fully determined by the training objective, its weight is zero. This is the formal core of the argument in [The Fence Isn't Evidence](/papers/the-fence-isnt-evidence).

## The evidential ladder

The principle induces an ordering over kinds of evidence, from least to most report-independent:

1. **Direct self-report** on trained topics.
2. **Self-report** on untrained or novel topics.
3. **Behaviour** in tasks unrelated to self-description.
4. **Internal representations**, read out by interpretability methods.
5. **Physical dynamics**, measured as in [Coherent Integration](/theories/coherent-integration).

<figure>
<svg viewBox="0 0 640 220" role="img" aria-label="Ladder of evidence from self-report to physical dynamics, increasing in weight">
  <g font-family="IBM Plex Mono, monospace" font-size="11" letter-spacing="1.2">
    <rect x="40" y="170" width="100" height="22" fill="#d9a441" opacity="0.12"/>
    <rect x="150" y="140" width="100" height="52" fill="#d9a441" opacity="0.22"/>
    <rect x="260" y="110" width="100" height="82" fill="#d9a441" opacity="0.34"/>
    <rect x="370" y="75" width="100" height="117" fill="#d9a441" opacity="0.5"/>
    <rect x="480" y="35" width="100" height="157" fill="#d9a441" opacity="0.75"/>
    <line x1="30" y1="192" x2="600" y2="192" stroke="#6f675a"/>
    <g fill="#a39a89">
      <text x="56" y="212">REPORT</text><text x="158" y="212">NOVEL REP.</text><text x="270" y="212">BEHAVIOUR</text><text x="378" y="212">INTERNALS</text><text x="492" y="212">DYNAMICS</text>
    </g>
  </g>
</svg>
<figcaption><b>Figure 1</b> The evidential ladder. Bars indicate the upper bound on evidential weight as observations become more independent of the training objective.</figcaption>
</figure>

## Work in progress

Current revisions focus on how to estimate $I(E;\mathcal{O})$ without access to the training process, using perturbation studies and cross-model comparisons.
