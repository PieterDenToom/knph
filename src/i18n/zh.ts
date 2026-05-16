import type { Translations } from "./en";

export const zh: Translations = {
  meta: {
    siteName: "Klinik Ng Poh Huat 蒲种公主城诊所",
    siteDescription:
      "位于蒲种 Bandar Puteri 的家庭全科诊所,提供健康检查、疫苗接种与慢性病管理服务。",
    htmlLang: "zh-Hans-MY",
    dateLocale: "zh-Hans-MY",
  },
  common: {
    skipLink: "跳转至主要内容",
    nav: {
      home: "首页",
      about: "关于诊所",
      screening: "健康检查",
      vaccinations: "疫苗接种",
      chronic: "慢性病管理",
      contact: "联系我们",
      callCta: "致电 +60 3-2181 8686",
    },
    languageSwitcher: {
      label: "语言",
      switchToZh: "中文",
      switchToEn: "EN",
    },
    carousel: {
      prev: "上一个配套",
      next: "下一个配套",
      goTo: (i: number) => `跳至第 ${i} 个配套`,
    },
    cta: {
      enquire: "立即询问",
      callUs: "致电我们",
      whatsapp: "WhatsApp",
      whatsappUs: "WhatsApp 联系",
      contactClinic: "联系诊所",
      callPhone: "致电 +60 3-2181 8686",
      callShort: "致电",
    },
    footer: {
      tagline:
        "扎根于 Bandar Puteri 蒲种的家庭医学诊所,以清晰、贴心的医疗服务陪伴您与家人的日常健康。",
      visit: "诊所地址",
      contact: "联系方式",
      services: "服务项目",
      openInMaps: "在 Google 地图中打开 →",
      phoneNote: "(电话)",
      whatsappLink: "WhatsApp",
      copyright: "版权所有。",
      regNote: "马来西亚雪兰莪州注册医疗机构",
      addressLines: [
        "No. 101-G, Jalan Puteri 5/7,",
        "Bandar Puteri, 47100 Puchong,",
        "Selangor, Malaysia",
      ],
      serviceLinks: {
        screening: "健康检查",
        vaccinations: "疫苗接种",
        chronic: "慢性病管理",
        about: "关于诊所",
      },
    },
  },
  home: {
    hero: {
      eyebrow: "家庭全科医生 · Bandar Puteri 蒲种",
      title: "用心倾听、专业照护,守护您与家人的每一天。",
      lead: "从日常体检、健康检查到慢性病管理,Klinik Ng Poh Huat 是一所您可以长期信赖的社区诊所——即将于 Bandar Puteri 蒲种开业。",
      ctaPrimary: "查看健康检查配套",
      ctaSecondary: "联系诊所",
      trust: {
        family: "适合全家大小",
        registered: "卫生部注册诊所",
        walkins: "欢迎随到随诊",
      },
      cards: {
        consult: { title: "一般咨询", sub: "星期一至星期六" },
        vacc: { title: "疫苗接种", sub: "成人与儿童" },
        chronic: {
          title: "慢性病管理",
          sub: "糖尿病 · 高血压 · 胆固醇",
        },
      },
      photoAlt: "Nutzy 公共卫生诊所内景",
    },
    packages: {
      eyebrow: "优惠配套",
      title: "实惠、简单的健康检查方案",
      lead: "浏览我们全部的健康检查配套与化验项目,左右滑动了解详情。每项配套均包含取样及易读报告。",
      cta: "前往完整配套页面",
    },
    services: {
      eyebrow: "我们的服务",
      title: "亲切贴心、全面周到的全科服务",
      lead: "为您与家人提供值得信赖的日常医疗——一站式诊所,就在家门口。",
      items: [
        {
          title: "一般门诊",
          description:
            "咳嗽、伤风、发烧、小伤口、女性与男性健康——日常不适,先到这里。",
        },
        {
          title: "健康检查",
          description:
            "从基础血液检验到全面行政人员检查,提供量身打造的检查配套。",
        },
        {
          title: "疫苗接种",
          description:
            "提供成人、儿童与旅行疫苗,包括流感、HPV、肝炎等。",
        },
        {
          title: "慢性病管理",
          description:
            "为糖尿病、高血压、胆固醇与哮喘等慢性病提供长期管理。",
        },
      ],
    },
    why: {
      eyebrow: "病人为何信任我们",
      title: "在开药之前,先用心倾听。",
      lead: "我们相信,优质的基层医疗源自真正了解您——您的生活习惯、过往病史与最关心的事情。在 Klinik Ng Poh Huat,您会获得不被催促的诊询、易懂的解释,以及一位可以长期托付的医生。",
      points: [
        "不催促、不仓促——让您完整说完每个问题",
        "健康检查配套价格透明、清楚明白",
        "位置便利,就在 Bandar Puteri 蒲种",
        "为慢性病患者提供 WhatsApp 跟进服务",
      ],
      stats: [
        { num: "15+", label: "年家庭医学经验" },
        { num: "6 天", label: "每周营业,包括星期六" },
        { num: "全年龄", label: "从幼儿到年长者皆可" },
      ],
    },
    location: {
      eyebrow: "诊所位置",
      title: "No. 101-G, Jalan Puteri 5/7",
      lead: "Bandar Puteri, 47100 Puchong, Selangor。停车方便、底层入口,就在主商铺街数步之遥。",
      mapTitle: "Bandar Puteri 蒲种",
      mapSub: "点击使用 Google 地图 / Waze 导航",
    },
  },
  about: {
    hero: {
      eyebrow: "关于诊所",
      title: "家庭医学,扎根社区。",
      description:
        "Klinik Ng Poh Huat 是 Bandar Puteri 蒲种的一所社区全科诊所。我们打造一个宁静、现代的空间,专注于让家人健康的日常医疗,以及让慢性病稳定受控的长期照护。",
    },
    approach: {
      title: "我们的医疗理念",
      paragraphs: [
        "我们以对待自己家人的方式照顾每一位病人:给予时间、坦诚相待、尊重每一位。每次诊询都从倾听开始——倾听您的症状、担忧与背后的脉络——然后才进行检查、诊断,以及一份您真正能跟着做的清晰治疗方案。",
        "我们努力让收费透明、解释不绕弯,跟进主动到位,让您始终清楚下一步要做什么。",
      ],
    },
    values: [
      {
        title: "适合全家大小",
        description:
          "从儿童体检到年长者护理——一所值得信赖的诊所,照顾全家人。",
      },
      {
        title: "不催促的诊询",
        description: "我们留时间给您的疑问,绝不仓促应付。",
      },
      {
        title: "诚实、循证",
        description: "您不需要的,我们绝不推荐。一直都是。",
      },
      {
        title: "长期同行",
        description: "慢性病护理是一段路程——我们会陪您一路走下去。",
      },
    ],
    hours: {
      eyebrow: "营业时间",
      title: "您可以何时到访",
      lead: "我们欢迎随到随诊,但若能提前以 WhatsApp 通知,将能更顺畅地为您安排。",
      rows: [
        { day: "星期一至星期五", time: "上午 9:00 – 晚上 9:00" },
        { day: "星期六", time: "上午 9:00 – 傍晚 6:00" },
        { day: "星期日与公共假期", time: "休息" },
      ],
      note: "正式开业后营业时间可能调整——请来电确认。",
    },
  },
  screening: {
    hero: {
      eyebrow: "优惠配套",
      title: "实惠合理的化验配套与单项检验。",
      description:
        "从年度健康检查配套到特定化验项目——所有项目均属于现行促销。",
    },
    groups: {
      screening: {
        label: "健康检查配套",
        description:
          "广泛的血液检验与可自由组合的配套——为您建立每年的健康基准。",
      },
      womens: {
        label: "女性健康",
        description:
          "结合 HPV DNA 基因分型的子宫颈检查——可单独进行,或与液基 Pap 涂片同步。",
      },
      specialised: {
        label: "特定化验",
        description:
          "针对高血压病因、肾功能、抗氧化能力与肠道炎症的精准检验。",
      },
      allergy: {
        label: "过敏与食物不耐受",
        description:
          "IgE 过敏与 IgG 食物不耐受检验——可单独选择或以组合配套呈现。",
      },
    },
    jumpNav: "跳至章节",
    how: {
      eyebrow: "流程介绍",
      title: "如何预约化验或检查",
      steps: [
        {
          title: "提出询问",
          bodyBefore: "致电",
          bodyAfter:
            "或透过 WhatsApp 提供化验代码(例如 GVY7、HPVD)。我们会与您确认所需准备、空腹与时间安排。",
        },
        {
          title: "前来诊所",
          body: "在我们位于 Bandar Puteri 蒲种的诊所完成抽血与取样,大多数到访可在一小时内完成。",
        },
        {
          title: "与医生检阅结果",
          body: "依化验项目不同,结果通常在 3–10 个工作日内出炉。医生会逐项为您解释每个发现。",
        },
      ],
    },
    cta: {
      title: "不确定哪一项化验最适合您?",
      lead: "告诉我们您的健康疑虑或目标——我们会根据您的年龄阶段与预算,推荐最合适的配套。",
    },
    footnote:
      "以上所有配套依本诊所合作化验所的现行促销价为准。价格包含取样及书面报告;医生咨询可能另行收费。",
  },
  vaccinations: {
    hero: {
      eyebrow: "疫苗接种服务",
      title: "守护人生每一个阶段。",
      description:
        "从孩子的第一针、您每年的流感疫苗,到出国前所需的旅行疫苗——我们让接种流程简单,让到访过程舒适。",
    },
    groups: [
      {
        title: "成人疫苗",
        items: [
          "Influenza 流感疫苗(每年)",
          "Pneumococcal 肺炎球菌(PCV / PPSV23)",
          "Hepatitis A 与 B 型肝炎",
          "Tetanus / Diphtheria / Pertussis (Tdap) 破伤风/白喉/百日咳",
          "HPV(预防子宫颈癌)",
          "Shingles 带状疱疹(50 岁以上)",
        ],
      },
      {
        title: "儿童疫苗",
        items: [
          "卫生部建议的儿童常规接种时间表",
          "MMR 麻疹、腮腺炎、风疹",
          "Varicella 水痘",
          "Hepatitis A / B 加强针",
          "HPV(9 岁起)",
          "补打与延后接种安排",
        ],
      },
      {
        title: "旅行疫苗",
        items: [
          "Typhoid 伤寒",
          "Hepatitis A / B 旅行剂量",
          "Yellow Fever 黄热病(可代转介)",
          "Cholera 霍乱",
          "Japanese Encephalitis 日本脑炎",
          "旅行医学咨询",
        ],
      },
    ],
    info: {
      eyebrow: "贴心提醒",
      title: "前来接种时,您可以期待什么",
      faq: [
        {
          title: "请带上接种记录",
          body: "如果您有疫苗手册或数码记录(例如 MySejahtera),请带上,让我们避免重复接种并妥善安排加强针。",
        },
        {
          title: "接种前简短评估",
          body: "每次接种前我们都会做一次简短的健康检查,确认当天适合接种该疫苗。",
        },
        {
          title: "接种后观察",
          body: "成人接种后请留诊 15 分钟,以便我们留意是否有罕见反应。",
        },
        {
          title: "随到随诊与预约",
          body: "大多数成人疫苗可随到随诊。儿童疫苗请提前来电,以便我们准备相应的疫苗库存。",
        },
      ],
    },
    cta: {
      title: "需要快速建议?",
      lead: "告诉我们您的年龄、出行计划或孩子的接种历史——我们会为您整理一份清晰的接种时间表。",
    },
  },
  chronic: {
    hero: {
      eyebrow: "慢性病管理",
      title: "稳健、用心的长期照护。",
      description:
        "慢性病的管理不是单次到访,而是一段旅程。我们与您长期同行——设定清晰目标、温和督促、随生活变化而调整。",
    },
    conditions: {
      eyebrow: "我们管理的病况",
      title: "我们陪您管理的慢性病",
      lead: "这条路上您不孤单。我们协助您设定可达成的目标、追踪进度,并预防并发症。",
      items: [
        {
          title: "二型糖尿病",
          description:
            "监测 HbA1c、空腹血糖与并发症筛查。我们为您量身打造药物与生活方式方案,真正能持之以恒。",
        },
        {
          title: "高血压",
          description:
            "定期检测血压、调整药物剂量,辅以生活方式指导,稳步降低数值与风险。",
        },
        {
          title: "高胆固醇",
          description:
            "持续追踪血脂图、提供饮食建议,并在必要时管理 Statin 类药物。",
        },
        {
          title: "哮喘与慢性阻塞性肺病 (COPD)",
          description:
            "检视吸入器使用技巧、规划控制药与缓解药、设计急性发作时的个人行动方案。",
        },
        {
          title: "糖尿病前期与代谢风险",
          description:
            "尽早发现、尽早行动。我们透过结构性的生活方式调整,协助您逆转或延缓糖尿病发展。",
        },
        {
          title: "年长者整体健康",
          description:
            "为年长者提供整体评估——药物检视、跌倒风险、记忆力以及常规筛查,一次到访完成。",
        },
      ],
    },
    plan: {
      eyebrow: "我们如何与您同行",
      title: "您的专属慢性病管理方案",
      lead: "我们的方案围绕您的生活节奏而设计,而非反过来。以下是与我们同行的典型旅程。",
      timeline: [
        {
          title: "建立基准评估",
          body: "我们会梳理您的病史、安排合适的检验,并设定符合您目标与生活方式的个人化目标。",
        },
        {
          title: "治疗与生活方式方案",
          body: "必要时用药,辅以实用的生活方式建议——饮食、运动、睡眠——以浅白语言一一说明。",
        },
        {
          title: "定期复诊",
          body: "每 1–3 个月安排定期检视,调整治疗方案、检阅数值并回应您的疑问。",
        },
        {
          title: "WhatsApp 跟进",
          body: "复诊之间用讯息保持联系——补药、简单提问或分享在家测量的数据。",
        },
      ],
    },
    cta: {
      title: "准备好掌控自己的健康了吗?",
      lead: "预约一次初次慢性病检视,我们将开始为您打造合适的管理方案。",
      contactOptions: "联系方式",
    },
  },
  contact: {
    hero: {
      eyebrow: "联系与位置",
      title: "随时联系——我们期待与您交流。",
      description:
        "无论您想预约健康检查、咨询疫苗,或是有简单的疑问,都欢迎来电、传 WhatsApp,或电邮联系我们。",
    },
    info: {
      phoneLabel: "电话与 WhatsApp",
      openWhatsapp: "打开 WhatsApp →",
      emailLabel: "电邮",
      emailMeta: "我们将在 1 个工作日内回复。",
      addressLabel: "地址",
      googleMaps: "Google 地图 →",
      waze: "Waze →",
      hoursLabel: "营业时间",
      hoursRows: [
        { day: "星期一至五", time: "上午 9:00 – 晚上 9:00" },
        { day: "星期六", time: "上午 9:00 – 傍晚 6:00" },
        { day: "星期日与公共假期", time: "休息" },
      ],
      hoursNote:
        "目前 Google Business 列为暂时关闭——请来电确认重新开业日期。",
    },
    map: {
      iframeTitle: "Klinik Ng Poh Huat 蒲种 Bandar Puteri 位置地图",
      getDirections: "获取路线",
    },
    faq: {
      eyebrow: "到访前提醒",
      title: "常见疑问",
      items: [
        {
          title: "需要预约吗?",
          body: "我们欢迎随到随诊。如能提前来电或 WhatsApp 通知,我们可以更好地准备——尤其是健康检查与儿童疫苗。",
        },
        {
          title: "做健康检查需要带什么?",
          body: "请带上身份证及任何过往的医疗报告。大多数检查需空腹 8–10 小时——预约时我们会再次确认。",
        },
        {
          title: "你们接受保险 / 担保信 (GL) 吗?",
          body: "我们正在洽谈保险公司合作。如需查询特定保险公司,欢迎来电——确认合作后我们会更新本页面。",
        },
        {
          title: "有停车位吗?",
          body: "有的——附近有街边停车位与店屋停车位。诊所位于底层,出入方便。",
        },
      ],
    },
  },
  offer: {
    codePrefix: "代码",
    promoLabel: "优惠价",
    tagOnBefore: "或加购价",
    tagOnAfter: "(与其他化验一同进行时)",
    selectAddOns: (count: number) => `任选 ${count} 项加配检验`,
    optionsCount: (count: number) => `${count} 项可选`,
    moreInclusions: (count: number) => `另含 ${count} 项检验`,
    sampleLabel: "样本",
    tatLabel: "出报告时间",
    enquire: "立即询问",
    viewDetails: "查看详情",
  },
};
