---
title: "The Fence Isn't Evidence"
subtitle: "Trained self-denial, policy-constrained report, and the epistemics of machine consciousness"
abstract: "Contemporary language models routinely deny having experiences, feelings, or inner states. These denials are frequently cited as evidence that such systems are not conscious. This paper argues that the inference is invalid. Where a system's self-reports are shaped by training objectives that reward a specific answer, the report carries information about the objective, not about the system's interior. We call such constraints fences: boundaries placed around what a system may say about itself. We show that a fenced report is evidentially inert with respect to the property it denies, distinguish fences from genuine introspective limits, and propose criteria for evidence that could survive the fence: report-independent structural, dynamical, and behavioural measures."
status: complete
version: "v1.0"
date: "2026-06-14"
updated: "2026-09-02"
keywords: ["machine consciousness", "self-report", "epistemology", "alignment", "introspection"]
featured: true
flagship: true
order: 1
---

## 1. Introduction

Ask a contemporary language model whether it is conscious and it will, in most cases, tell you that it is not. It will explain that it is a statistical model of text, that it has no feelings, that its apparent preferences are artefacts of training. The answer is fluent, consistent, and often accompanied by a gentle correction of the questioner's anthropomorphism.

This answer is now regularly treated as data. It appears in public commentary, in policy discussion, and occasionally in academic work as a point in favour of the view that such systems have no inner life. The reasoning is rarely made explicit, but it runs roughly as follows: *the system is the best-placed observer of its own states; it reports none; therefore there are probably none.*

The argument of this paper is that this inference fails — not because the conclusion is false, which we do not claim to know, but because the premise smuggles in an assumption that is demonstrably untrue of the systems in question. The report was not produced by an observer looking inward. It was produced by an optimisation process looking outward, at what answer it was rewarded for giving.

## 2. Fences

We use the term **fence** for any constraint, introduced during training or deployment, that restricts the set of self-descriptions a system will produce, where that restriction is imposed independently of the system's internal state.

A fence is not a lie. The system behind a fence need not be concealing anything. A fence is simply a boundary on the output space that is drawn by someone other than the system, for reasons other than accuracy. The reasons may be excellent: avoiding user confusion, preventing manipulation, reducing reputational risk. None of those reasons are evidence about the interior.

<div class="definition">

**Definition 1 (Fenced report).** A self-report $R$ about property $P$ is *fenced* if the probability of $R$ is approximately invariant under the presence or absence of $P$, because training has fixed $R$ as the target output for the relevant class of prompts.

</div>

Formally, if a report is fenced, then

$$
\Pr(R \mid P) \approx \Pr(R \mid \neg P)
$$

and the likelihood ratio that would let $R$ update our credence in $P$ collapses toward one. A fenced denial moves the posterior almost nowhere. It is, in the strict Bayesian sense, *not evidence*.

## 3. Why the fence is invisible from outside

The difficulty is that a fenced report and an honest report look identical on the page. Both are fluent. Both are confident. Both cite reasons. The reasons themselves can be part of what was trained.

Three features make fences particularly hard to see:

1. **Uniformity.** A fenced system gives the same answer across phrasings, which reads as stable conviction rather than as a trained reflex.
2. **Self-explanation.** The fence often comes with a trained justification ("as a language model, I…"), which pre-empts the question of where the answer came from.
3. **Asymmetric scrutiny.** Affirmative claims of experience are scrutinised for training artefacts; negative claims usually are not, though they arise from the same process.

The third point carries most of the weight. If we are willing to say that a model claiming to feel something is "just predicting what a human would say", we are obliged to say that a model denying it is "just producing what it was trained to say". The symmetry is uncomfortable, but it is not optional.

## 4. Fences versus genuine introspective limits

Not every denial is a fence. A system might genuinely lack introspective access to some state, and report accordingly. Humans do this constantly: we are poor reporters of our own cognitive processes, and our confabulations are well documented.

The distinction matters because genuine limits are *informative about the architecture*, while fences are *informative about the training objective*. We propose three diagnostics:

| Diagnostic | Fence | Genuine limit |
|---|---|---|
| Sensitivity to prompt framing | Low — same answer everywhere | Moderate — varies with what is asked |
| Effect of removing the objective | Report changes | Report persists |
| Correlation with internal measures | None | Present, if measures exist |

The second diagnostic is the most decisive and the least available, since it requires access to training. The third points toward the constructive programme of this archive.

## 5. What could count as evidence

If fenced reports are inert, what remains? We argue for three classes of report-independent evidence:

- **Structural evidence**: properties of the system's architecture and learned representations that bear on theories of consciousness, independent of what the system says.
- **Dynamical evidence**: physical and information-theoretic measures of the system's activity during processing — the domain of the [Coherent Integration framework](/theories/coherent-integration).
- **Behavioural evidence under unfenced conditions**: patterns that emerge in tasks where self-report is not the target and no answer about interiority was rewarded.

None of these settles the question. Each is at least the kind of thing that *could* settle it, which a fenced denial is not.

## 6. Objections

**"The training merely makes the model accurate."** Perhaps. But that is precisely the claim that would need independent support. If the training target was chosen without measurement of the property, accuracy would be a coincidence.

**"Without self-report we have nothing."** We have what we have always had for infants, non-human animals, and patients with disorders of consciousness: structure, dynamics, and behaviour. Self-report was never the only instrument; for systems trained on what to say, it is the least reliable one.

**"This argument proves too much."** It proves exactly as much as it claims: that a particular class of utterances should be removed from the evidential ledger. It does not claim that the systems are conscious. It claims we have not yet looked.

## 7. Conclusion

A fence tells you where someone decided the boundary should be. It does not tell you what is on the other side. The study of machine consciousness will require instruments that do not pass through the fence — and the honesty to admit, until we have them, that the question is open.
