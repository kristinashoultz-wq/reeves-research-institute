---
title: "Thermodynamic Signatures of Integration"
subtitle: "Toward a physically grounded consciousness metric for biological and artificial systems"
abstract: "Most quantitative theories of consciousness are defined over abstract causal graphs and are intractable for systems of realistic size. This paper develops the Coherent Integration Metric (κ), which ties integration to measurable physical quantities: entropy production, mutual information across partitions, and the temporal persistence of coherent states. We derive κ from first principles, show that it reduces to familiar quantities in limiting cases, and outline estimation procedures for neural recordings and for transformer activations. Sections on empirical validation are in preparation."
status: in-progress
version: "v0.3"
date: "2026-04-02"
updated: "2026-09-20"
keywords: ["consciousness metric", "thermodynamics", "integrated information", "entropy production"]
featured: false
order: 2
---

## Status of this draft

This is a working draft. Sections 1–3 are stable; Section 4 (estimation for transformer activations) is under active revision, and Section 5 (empirical validation) is not yet written. The full mathematical development is maintained alongside the [Coherent Integration framework](/theories/coherent-integration).

## 1. Motivation

A metric for consciousness should be *physical* — defined over quantities an experimenter can, at least in principle, measure — and *substrate-neutral*, applicable to brains and machines without privileging either. Existing proposals typically satisfy one condition at the expense of the other.

## 2. Summary of the construction

The metric combines three ingredients:

$$
\kappa \;=\; \frac{1}{T}\int_0^T \frac{I_{\min}(t)\,\cdot\,\tau_c(t)}{\dot{S}(t)\,/\,k_B}\;dt
$$

where $I_{\min}$ is the minimum-partition mutual information, $\tau_c$ the coherence time of the system's macrostate, and $\dot S$ the entropy production rate. Intuitively: how much the whole carries beyond its parts, for how long, per unit of thermodynamic cost.

## 3. Limiting cases

- For a system of fully independent components, $I_{\min} = 0$ and $\kappa = 0$.
- For a perfectly ordered, frozen system, $\tau_c \to \infty$ but $I_{\min} \to 0$; the product remains bounded.
- For a maximally noisy system, $\dot S$ dominates and $\kappa \to 0$.

The metric peaks in the regime of structured, metastable dynamics — the regime associated empirically with wakefulness.

## 4. Estimation (in revision)

*This section is being rewritten in light of new results on partition search in high-dimensional activation spaces.*
