/**
 * Site content.
 *
 * All visitor-facing copy lives here so the page scripts only render layout.
 * Prose is English. Facts are taken from Honggang Yuan's curriculum vitae,
 * with bibliographic details cross-checked against the published record
 * (IEEE DOIs and the advisor's publication list). Do not invent awards,
 * metrics, or paper status here.
 */
(function (global) {
  "use strict";

  var advisorUrl = "https://tingwang1122.github.io/";
  var ecnuUrl = "https://www.ecnu.edu.cn/";
  var haustUrl = "https://www.haust.edu.cn/";
  var nokiaUrl = "https://www.nokia.com/";

  var profile = {
    name: "Honggang Yuan",
    nameZh: "袁红刚",
    role: "Ph.D. Student in Software Engineering",
    org: "East China Normal University",
    orgUrl: ecnuUrl,
    email: "yuanhg1024@gmail.com",
    phone: "155-3974-9702",
    location: "Putuo District, Shanghai, China",
    department: "Software Engineering Institute, East China Normal University",
    github: "https://github.com/hongan-yuan",
    scholar: "https://scholar.google.com/citations?user=UClZClcAAAAJ&hl=en",
    // Path is resolved against the page root by the UI module.
    cv: "assets/Honggang_Yuan_CV.pdf",
    portrait: "assets/portrait.jpg",
    portraitAlt: "Portrait of Honggang Yuan"
  };

  var biography = [
    "Honggang Yuan is a Ph.D. student in Software Engineering at East China Normal University, advised by Professor Ting Wang. His research focuses on edge artificial intelligence, reinforcement learning, and satellite networks.",
    "He received his M.Eng. in Software Engineering from East China Normal University in 2025, also under the supervision of Professor Ting Wang, working on microservice orchestration, resource scheduling, reinforcement learning, and satellite networks. He received his B.Eng. in Internet of Things Engineering from Henan University of Science and Technology in 2021.",
    "His papers have appeared in IEEE Transactions on Mobile Computing and IEEE Internet of Things Journal, and at IEEE ICC and IEEE GLOBECOM. He was named a Shanghai Outstanding Graduate in 2025. He reviews for IEEE TWC, IEEE TMC, IEEE IoTJ, and IEEE ICC, and was a teaching assistant for Cloud Computing in Fall 2025."
  ];

  var interests = [
    "Edge Artificial Intelligence",
    "Reinforcement Learning",
    "Satellite Networks",
    "Microservice Orchestration and Resource Scheduling",
    "Large Language Model Agents for 6G"
  ];

  var education = [
    {
      degree: "Ph.D. in Software Engineering",
      dates: "2025.9 – Present",
      school: "East China Normal University",
      schoolUrl: ecnuUrl,
      advisor: "Prof. Ting Wang",
      advisorUrl: advisorUrl,
      logo: "ecnu"
    },
    {
      degree: "M.Eng. in Software Engineering",
      dates: "2022.9 – 2025.7",
      school: "East China Normal University",
      schoolUrl: ecnuUrl,
      advisor: "Prof. Ting Wang",
      advisorUrl: advisorUrl,
      logo: "ecnu"
    },
    {
      degree: "B.Eng. in Internet of Things Engineering",
      dates: "2017.9 – 2021.7",
      school: "Henan University of Science and Technology",
      schoolUrl: haustUrl,
      advisor: "",
      advisorUrl: "",
      logo: "haust"
    }
  ];

  // Newest start date first, matching the reference timeline.
  var experience = [
    {
      current: true,
      role: "Ph.D. Student in Software Engineering",
      org: "East China Normal University",
      orgUrl: ecnuUrl,
      logo: "ecnu",
      dates: "Sep 2025 – Present",
      location: "Shanghai",
      paragraphs: [
        "Advised by Professor Ting Wang. Research on edge artificial intelligence, reinforcement learning, and satellite networks."
      ],
      groups: [
        {
          title: "Academic Service",
          items: [
            "Presented an IEEE ICC 2025 conference paper online.",
            "Reviewer for IEEE Transactions on Wireless Communications (TWC), IEEE Transactions on Mobile Computing (TMC), IEEE Internet of Things Journal (IoTJ), and IEEE International Conference on Communications (ICC)."
          ]
        },
        {
          title: "Teaching Experience",
          items: ["Teaching assistant, Cloud Computing — Fall 2025."]
        }
      ]
    },
    {
      current: false,
      role: "Research Intern",
      org: "Nokia Shanghai Bell Labs (AI Research Group)",
      orgUrl: nokiaUrl,
      logo: "nokia",
      dates: "Jan 2024 – Apr 2025",
      location: "Shanghai",
      paragraphs: [
        "Designed domain-adapted large language model agents that turn high-level user demands into orchestrated 6G physical-layer workflows."
      ],
      groups: []
    },
    {
      current: false,
      role: "Software Assistant Engineer",
      org: "Nokia Shanghai Bell Labs (F.N.)",
      orgUrl: nokiaUrl,
      logo: "nokia",
      dates: "Nov 2022 – Oct 2023",
      location: "Shanghai",
      paragraphs: [
        "Built and validated a 6G computing power network demonstration platform, covering UDP service routing, automated edge deployment, and real-time scheduling that balances resource use with quality of service."
      ],
      groups: []
    },
    {
      current: false,
      role: "M.Eng. in Software Engineering",
      org: "East China Normal University",
      orgUrl: ecnuUrl,
      logo: "ecnu",
      dates: "Sep 2022 – Jul 2025",
      location: "Shanghai",
      paragraphs: [
        "Advised by Professor Ting Wang. Research on microservice orchestration and resource scheduling, reinforcement learning, and satellite networks."
      ],
      groups: [
        {
          title: "Awards & Honors",
          items: ["Shanghai Outstanding Graduate, Shanghai, 2025."]
        }
      ]
    },
    {
      current: false,
      role: "B.Eng. in Internet of Things Engineering",
      org: "Henan University of Science and Technology",
      orgUrl: haustUrl,
      logo: "haust",
      dates: "Sep 2017 – Jul 2021",
      location: "Luoyang",
      paragraphs: ["School of Information Engineering."],
      groups: [
        {
          title: "Awards & Honors",
          items: [
            "National Encouragement Scholarship, 2019–2020.",
            "University-level Merit Student (Three-Good Student), 2019."
          ]
        }
      ]
    }
  ];

  var publications = [
    {
      id: "elora",
      type: "journal",
      year: 2026,
      tag: "IEEE TMC",
      title: "E-LoRA: Layer-Adaptive Edge–Cloud Collaborative Inference for Personalized Large Language Models",
      authors: [
        { name: "Honggang Yuan", self: true },
        { name: "J. Zhu" },
        { name: "W. Li" },
        { name: "P. Yang" },
        { name: "Ting Wang" },
        { name: "Yuanming Shi" }
      ],
      venue: "IEEE Transactions on Mobile Computing, major revision, Aug. 2026.",
      badges: [
        { label: "CCF-A", kind: "ccf-a" },
        { label: "SCI Q1", kind: "sci" }
      ],
      links: [],
      published: false,
      note: "Major revision",
      summary: "Studies personalized LLM inference when uploading a LoRA adapter to the cloud is a data risk and edge compute is limited. E-LoRA keeps the LoRA adapter at the edge and runs it together with the cloud base model, and uses reinforcement learning to trade off latency against throughput. The reported result is up to a 65% reduction in token-generation latency and throughput up to 6.1 times that of prior methods.",
      bibtex: [
        "@article{yuan2026elora,",
        "  author    = {Yuan, Honggang and Zhu, J. and Li, W. and Yang, P. and Wang, Ting and Shi, Yuanming},",
        "  title     = {E-LoRA: Layer-Adaptive Edge--Cloud Collaborative Inference for Personalized Large Language Models},",
        "  journal   = {IEEE Transactions on Mobile Computing},",
        "  year      = {2026},",
        "  note      = {Major revision}",
        "}"
      ].join("\n")
    },
    {
      id: "dmtppo",
      type: "journal",
      year: 2026,
      tag: "IEEE IoTJ'26",
      title: "DMT-PPO: Weight-Adaptive Multi-Objective Task Offloading with Dynamic Preference Learning in Heterogeneous Edge Computing",
      authors: [
        { name: "Honggang Yuan", self: true },
        { name: "Yuxiang Deng" },
        { name: "Xiao Du" },
        { name: "Qin Li" },
        { name: "Ting Wang" },
        { name: "Lu Yang" },
        { name: "Yuanming Shi" }
      ],
      venue: "IEEE Internet of Things Journal, vol. 13, no. 17, pp. 40522–40537, Sept. 2026.",
      badges: [
        { label: "CCF-C", kind: "ccf-c" },
        { label: "SCI Q1", kind: "sci" }
      ],
      links: [
        { label: "Paper", url: "https://doi.org/10.1109/JIOT.2026.3710794" }
      ],
      note: "",
      summary: "Targets task offloading in heterogeneous edge computing when the preferred balance of delay and energy changes over time. DMT-PPO combines preference-aware reinforcement learning with transfer learning to choose servers, offloading decisions, and resource allocations together. Reported gains are about 12.5% lower energy, 10.6% lower task delay, and training efficiency up to 3.5 times that of prior methods.",
      bibtex: [
        "@article{yuan2026dmtppo,",
        "  author    = {Yuan, Honggang and Deng, Yuxiang and Du, Xiao and Li, Qin and Wang, Ting and Yang, Lu and Shi, Yuanming},",
        "  title     = {DMT-PPO: Weight-Adaptive Multi-Objective Task Offloading with Dynamic Preference Learning in Heterogeneous Edge Computing},",
        "  journal   = {IEEE Internet of Things Journal},",
        "  volume    = {13},",
        "  number    = {17},",
        "  pages     = {40522--40537},",
        "  year      = {2026},",
        "  doi       = {10.1109/JIOT.2026.3710794}",
        "}"
      ].join("\n")
    },
    {
      id: "girp",
      type: "journal",
      year: 2025,
      tag: "IEEE TMC'25",
      title: "GIRP: Energy-Efficient QoS-Oriented Microservice Resource Provisioning via Multi-Objective Multi-Task Reinforcement Learning",
      authors: [
        { name: "Honggang Yuan", self: true },
        { name: "Ting Wang" },
        { name: "Min Fu" },
        { name: "Yuanming Shi" }
      ],
      venue: "IEEE Transactions on Mobile Computing, vol. 24, no. 7, pp. 5793–5807, Jul. 2025.",
      badges: [
        { label: "CCF-A", kind: "ccf-a" },
        { label: "SCI Q1", kind: "sci" }
      ],
      links: [
        { label: "Paper", url: "https://doi.org/10.1109/TMC.2025.3547339" }
      ],
      note: "",
      summary: "Treats quality of service and power as a joint problem in microservice systems. GIRP models CPU-core counts, service replicas, and placement as a latency–power bi-objective decision and solves it with multi-task reinforcement learning. Experiments report about 52% resource savings and about 43% lower power.",
      bibtex: [
        "@article{yuan2025girp,",
        "  author    = {Yuan, Honggang and Wang, Ting and Fu, Min and Shi, Yuanming},",
        "  title     = {GIRP: Energy-Efficient QoS-Oriented Microservice Resource Provisioning via Multi-Objective Multi-Task Reinforcement Learning},",
        "  journal   = {IEEE Transactions on Mobile Computing},",
        "  volume    = {24},",
        "  number    = {7},",
        "  pages     = {5793--5807},",
        "  year      = {2025},",
        "  doi       = {10.1109/TMC.2025.3547339}",
        "}"
      ].join("\n")
    },
    {
      id: "elara",
      type: "conference",
      year: 2026,
      tag: "INFOCOM",
      title: "ELARA: Orchestrating Microservices under Evolving Topologies and Shifting Demand in LEO Networks",
      authors: [
        { name: "Honggang Yuan", self: true },
        { name: "Ting Wang" },
        { name: "P. Yang" },
        { name: "M. Chen" },
        { name: "L. Yang" },
        { name: "Yuanming Shi" }
      ],
      venue: "IEEE Conference on Computer Communications (INFOCOM), under revision.",
      badges: [
        { label: "CCF-A", kind: "ccf-a" }
      ],
      links: [],
      published: false,
      note: "Under revision",
      summary: "Studies microservice orchestration for low-Earth-orbit networks whose topology and demand both change. The manuscript is under revision at IEEE INFOCOM.",
      bibtex: [
        "@inproceedings{yuan2026elara,",
        "  author    = {Yuan, Honggang and Wang, Ting and Yang, P. and Chen, M. and Yang, L. and Shi, Yuanming},",
        "  title     = {ELARA: Orchestrating Microservices under Evolving Topologies and Shifting Demand in LEO Networks},",
        "  booktitle = {IEEE Conference on Computer Communications (INFOCOM)},",
        "  year      = {2026},",
        "  note      = {Under revision}",
        "}"
      ].join("\n")
    },
    {
      id: "sai",
      type: "conference",
      year: 2025,
      tag: "IEEE ICC'25",
      title: "SAI: Latency-Aware Satellite Edge LAM Inference with Looped Transformer",
      authors: [
        { name: "Honggang Yuan", self: true },
        { name: "Zixin Wang" },
        { name: "Yuning Jiang" },
        { name: "Xin Liu" },
        { name: "Yuanming Shi" },
        { name: "Ting Wang" }
      ],
      venue: "In Proc. IEEE International Conference on Communications (ICC), Jun. 2025, Montreal, Canada.",
      badges: [
        { label: "CCF-C", kind: "ccf-c" }
      ],
      links: [
        { label: "Paper", url: "https://doi.org/10.1109/ICC52391.2025.11161072" }
      ],
      note: "",
      summary: "Presents SAI, a multi-satellite inference system for looped-Transformer large AI models. It plans data and pipeline parallelism across heterogeneous onboard computers and formulates latency as a shortest-path problem, cutting inference latency and runtime memory relative to the baselines in the paper.",
      bibtex: [
        "@inproceedings{yuan2025sai,",
        "  author    = {Yuan, Honggang and Wang, Zixin and Jiang, Yuning and Liu, Xin and Shi, Yuanming and Wang, Ting},",
        "  title     = {SAI: Latency-Aware Satellite Edge LAM Inference with Looped Transformer},",
        "  booktitle = {Proc. IEEE International Conference on Communications (ICC)},",
        "  year      = {2025},",
        "  address   = {Montreal, Canada},",
        "  doi       = {10.1109/ICC52391.2025.11161072}",
        "}"
      ].join("\n")
    },
    {
      id: "lam-train",
      type: "conference",
      year: 2025,
      tag: "GLOBECOM'25",
      title: "Latency-Minimal Decentralized LAM Training with Looped Transformers in Heterogeneous LEO Satellite Constellations",
      authors: [
        { name: "He Xian" },
        { name: "Zixin Wang" },
        { name: "Honggang Yuan", self: true },
        { name: "Ting Wang" },
        { name: "Yuanming Shi" }
      ],
      venue: "In Proc. IEEE Global Communications Conference (GLOBECOM), Dec. 2025, Taipei, China. Accepted.",
      badges: [
        { label: "CCF-C", kind: "ccf-c" }
      ],
      links: [],
      note: "",
      summary: "Studies decentralized training of looped-Transformer large AI models across heterogeneous low-Earth-orbit satellites, with the objective of minimizing training latency.",
      bibtex: [
        "@inproceedings{xian2025lam,",
        "  author    = {Xian, He and Wang, Zixin and Yuan, Honggang and Wang, Ting and Shi, Yuanming},",
        "  title     = {Latency-Minimal Decentralized LAM Training with Looped Transformers in Heterogeneous LEO Satellite Constellations},",
        "  booktitle = {Proc. IEEE Global Communications Conference (GLOBECOM)},",
        "  year      = {2025},",
        "  address   = {Taipei, China},",
        "  note      = {Accepted}",
        "}"
      ].join("\n")
    },
    {
      id: "llm-6g",
      type: "conference",
      year: 2024,
      tag: "GLOBECOM'24",
      title: "LLM Agents as 6G Orchestrator: A Paradigm for Task-Oriented Physical-Layer Automation",
      authors: [
        { name: "Z. Xiao" },
        { name: "C. Ye" },
        { name: "Y. Hu" },
        { name: "Honggang Yuan", self: true },
        { name: "Y. Huang" },
        { name: "L. Cai" }
      ],
      venue: "In Proc. IEEE Global Communications Conference (GLOBECOM), Dec. 2024, Cape Town, South Africa. Accepted.",
      badges: [
        { label: "CCF-C", kind: "ccf-c" }
      ],
      links: [],
      note: "",
      summary: "Proposes using large language model agents as an orchestrator for task-oriented physical-layer automation in 6G.",
      bibtex: [
        "@inproceedings{xiao2024llm6g,",
        "  author    = {Xiao, Z. and Ye, C. and Hu, Y. and Yuan, Honggang and Huang, Y. and Cai, L.},",
        "  title     = {LLM Agents as 6G Orchestrator: A Paradigm for Task-Oriented Physical-Layer Automation},",
        "  booktitle = {Proc. IEEE Global Communications Conference (GLOBECOM)},",
        "  year      = {2024},",
        "  address   = {Cape Town, South Africa},",
        "  note      = {Accepted}",
        "}"
      ].join("\n")
    }
  ];

  // The CV does not list patents. Keep the page so the navigation matches
  // the reference site; add entries here if that changes.
  var patents = [];

  global.SiteData = {
    profile: profile,
    biography: biography,
    interests: interests,
    education: education,
    experience: experience,
    publications: publications,
    patents: patents
  };
})(window);
