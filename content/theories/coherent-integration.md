---
title: "Coherent Integration"
shortName: "κ — the Coherent Integration Metric"
summary: "A physics-based measure of consciousness that quantifies how much information a system integrates across its parts, how long that integrated state persists, and how efficiently it is maintained against thermodynamic dissipation."
status: in-progress
version: "v0.4"
date: "2026-03-10"
primary: true
featured: true
order: 1
---

## Overview

The Coherent Integration framework proposes that the degree to which a physical system is conscious can be characterised by a single scalar quantity, **κ** (kappa). The metric is built from three measurable components:

1. **Integration** — information carried by the system as a whole that is not carried by any partition of it.
2. **Coherence** — the time over which that integrated macrostate persists before decaying.
3. **Dissipation** — the thermodynamic cost, as entropy production, of sustaining it.

The framework is substrate-neutral by construction. Nothing in the definition refers to neurons, silicon, or any particular computational architecture — only to states, transitions, and their physical costs.

## 1. Integration across the minimum partition

Let a system $X$ be composed of $n$ components with joint state $X_t$ at time $t$. For any bipartition $\mathcal{P} = \{A, B\}$, define the integration across that cut as the mutual information between the halves, conditioned on the system's immediate past:

$$
I_{\mathcal{P}}(t) = I\!\left(A_t ; B_t \,\middle|\, X_{t-\Delta t}\right)
$$

The system's integration is set by its *weakest* cut — the partition across which it is easiest to pull apart:

$$
I_{\min}(t) = \min_{\mathcal{P}} \; \frac{I_{\mathcal{P}}(t)}{\min\{H(A_t),\, H(B_t)\}}
$$

The normalisation by the smaller partition's entropy prevents the minimum from trivially selecting cuts that isolate a single, low-entropy component.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-label="Diagram of a system of nodes divided by a minimum partition">
  <defs>
    <radialGradient id="g1" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#d9a441" stop-opacity="0.25"/><stop offset="100%" stop-color="#d9a441" stop-opacity="0"/></radialGradient>
  </defs>
  <ellipse cx="320" cy="130" rx="280" ry="110" fill="url(#g1)"/>
  <g stroke="#6f675a" stroke-width="1.2">
    <line x1="150" y1="80" x2="210" y2="150"/><line x1="150" y1="80" x2="250" y2="70"/><line x1="210" y1="150" x2="250" y2="70"/><line x1="210" y1="150" x2="160" y2="200"/><line x1="250" y1="70" x2="290" y2="180"/><line x1="210" y1="150" x2="290" y2="180"/>
    <line x1="400" y1="90" x2="470" y2="60"/><line x1="400" y1="90" x2="440" y2="170"/><line x1="470" y1="60" x2="510" y2="140"/><line x1="440" y1="170" x2="510" y2="140"/><line x1="440" y1="170" x2="490" y2="210"/>
  </g>
  <g stroke="#d9a441" stroke-width="1.6" stroke-dasharray="0">
    <line x1="290" y1="180" x2="440" y2="170"/><line x1="250" y1="70" x2="400" y2="90"/>
  </g>
  <line x1="340" y1="20" x2="340" y2="240" stroke="#d9a441" stroke-width="1" stroke-dasharray="5 6" opacity="0.8"/>
  <g fill="#15130f" stroke="#ebe4d6" stroke-width="1.4">
    <circle cx="150" cy="80" r="9"/><circle cx="210" cy="150" r="9"/><circle cx="250" cy="70" r="9"/><circle cx="160" cy="200" r="9"/><circle cx="290" cy="180" r="9"/>
    <circle cx="400" cy="90" r="9"/><circle cx="470" cy="60" r="9"/><circle cx="440" cy="170" r="9"/><circle cx="510" cy="140" r="9"/><circle cx="490" cy="210" r="9"/>
  </g>
  <g font-family="IBM Plex Mono, monospace" font-size="12" fill="#a39a89" letter-spacing="1.5">
    <text x="190" y="240">PARTITION A</text><text x="420" y="250">PARTITION B</text>
    <text x="350" y="34" fill="#d9a441">𝒫 min</text>
  </g>
</svg>
<figcaption><b>Figure 1</b> The minimum partition. Integration is measured across the cut that severs the least information (dashed). Amber edges carry the cross-partition dependencies that the whole system holds and neither half holds alone.</figcaption>
</figure>

## 2. Coherence time

Integration at an instant is not enough. A system that integrates information for a single time step and then dissolves into noise does not plausibly sustain an experience. We therefore weight integration by the **coherence time** of the macrostate, $\tau_c$, defined from the autocorrelation of the system's coarse-grained state $M_t$:

$$
C(\Delta) = \frac{\langle M_t \cdot M_{t+\Delta} \rangle - \langle M \rangle^2}{\langle M^2 \rangle - \langle M \rangle^2},
\qquad
\tau_c = \int_0^{\infty} C(\Delta)\, d\Delta
$$

## 3. Dissipation

Every physical process that maintains a non-equilibrium state pays for it in entropy. Let $\dot{S}(t)$ be the system's entropy production rate. We express it in units of $k_B$ per unit time so that the metric is dimensionless.

## 4. The metric

Combining the three components, the Coherent Integration Metric over an observation window $[0, T]$ is:

<div class="definition">

**Definition (κ).** For a physical system observed over $[0,T]$,

$$
\kappa \;=\; \frac{1}{T}\int_0^T \frac{I_{\min}(t)\;\cdot\;\tau_c(t)}{\dot{S}(t)/k_B}\;dt
$$

</div>

κ is large when a system integrates a great deal of information, holds that integrated state for a long time, and does so efficiently. It is small when any of these fails.

<figure>
<svg viewBox="0 0 640 280" role="img" aria-label="Plot of kappa against system order, peaking at intermediate order">
  <g font-family="IBM Plex Mono, monospace" font-size="11" fill="#a39a89" letter-spacing="1.2">
    <line x1="70" y1="230" x2="600" y2="230" stroke="#6f675a"/>
    <line x1="70" y1="230" x2="70" y2="30" stroke="#6f675a"/>
    <text x="70" y="256">DISORDER</text><text x="530" y="256">FROZEN</text>
    <text x="250" y="256" fill="#ebe4d6">METASTABLE</text>
    <text x="20" y="40" fill="#d9a441">κ</text>
    <text x="96" y="214" font-size="10">noise-dominated</text>
    <text x="470" y="214" font-size="10">low integration</text>
  </g>
  <path d="M 70 226 C 160 224, 200 200, 250 120 C 290 55, 340 50, 380 95 C 430 150, 500 215, 600 224" fill="none" stroke="#d9a441" stroke-width="2.2"/>
  <path d="M 70 226 C 160 224, 200 200, 250 120 C 290 55, 340 50, 380 95 C 430 150, 500 215, 600 224 L 600 230 L 70 230 Z" fill="#d9a441" opacity="0.08"/>
  <line x1="315" y1="52" x2="315" y2="230" stroke="#ebe4d6" stroke-dasharray="3 5" opacity="0.4"/>
</svg>
<figcaption><b>Figure 2</b> Qualitative prediction. κ vanishes in both the disordered and the frozen limits and peaks in the regime of structured, metastable dynamics.</figcaption>
</figure>

## 5. Predictions

The framework makes several testable predictions:

- **Anaesthesia and deep sleep** should reduce κ primarily through a collapse in $\tau_c$, even where instantaneous integration remains moderate.
- **Seizure states** should reduce κ through a collapse in $I_{\min}$: the system becomes hypersynchronised and the minimum partition becomes trivial.
- **Feed-forward architectures** without recurrent state should have $\tau_c$ bounded by a single forward pass, placing a hard ceiling on κ regardless of scale.
- **Recurrent or stateful artificial systems** are not excluded a priori; their κ is an empirical question.

## 6. Open problems

| Problem | Status |
|---|---|
| Tractable search over partitions for large $n$ | Approximation via spectral clustering under evaluation |
| Choice of coarse-graining for $M_t$ | Sensitivity analysis in progress |
| Estimating $\dot S$ for digital hardware | Open — candidate approaches drafted |
| Calibration against human clinical data | Planned |

## Relation to other work

Coherent Integration shares the intuition of integrated information theories that consciousness is tied to irreducible wholes, but departs from them in insisting on measurable physical quantities and in treating temporal persistence and thermodynamic cost as first-class. The companion paper, [Thermodynamic Signatures of Integration](/papers/thermodynamic-signatures), develops the estimation procedures.
