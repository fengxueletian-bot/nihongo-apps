const DAILY_DATA_NEW = {
"Day3": {
  title: "第4課 语法（范围与手段表达）",
  grammar: [
    {
      name: "〜にかけて",
      meaning: "从…到…（大致的、模糊的范围）",
      structure: "名詞＋から＋名詞＋にかけて",
      examples: [
        {jp:"<ruby>夕方<rt>ゆうがた</rt></ruby>から<ruby>夜<rt>よる</rt></ruby>にかけて<ruby>小雨<rt>こさめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るそうです。", cn:"傍晚到夜间据说会下小雨。"},
        {jp:"<ruby>関東<rt>かんとう</rt></ruby><ruby>地方<rt>ちほう</rt></ruby>から<ruby>東北<rt>とうほく</rt></ruby><ruby>地方<rt>ちほう</rt></ruby>にかけて<ruby>大雨<rt>おおあめ</rt></ruby>が<ruby>予想<rt>よそう</rt></ruby>されます。", cn:"从关东到东北地区预计有大雨。"}
      ],
      keyPoint: "起点和终点模糊不明确，强调区间整体 🌧️",
      confusion: "vs から〜まで：まで是精确范围（几点到几点），にかけて是模糊范围（大概从哪到哪）",
      comparison: {pair:"にかけて vs まで", rows:[["大致模糊范围","具体明确范围"],["起止点不明确","起止点清晰"],["夕方から夜にかけて雨","3時から6時まで会議"],["傍晚到夜间（大概）","3点到6点（精确）"]]}
    },
    {
      name: "〜にわたって",
      meaning: "长达…/涉及…（跨越某范围的持续状态）",
      structure: "名詞＋にわたって／にわたる（修饰名詞）",
      examples: [
        {jp:"<ruby>高速道路<rt>こうそくどうろ</rt></ruby>が20kmにわたって<ruby>渋滞<rt>じゅうたい</rt></ruby>しています。", cn:"高速公路堵了长达20公里。"},
        {jp:"3<ruby>日間<rt>みっかかん</rt></ruby>にわたる<ruby>研究<rt>けんきゅう</rt></ruby><ruby>発表会<rt>はっぴょうかい</rt></ruby>が<ruby>開催<rt>かいさい</rt></ruby>されます。", cn:"举办长达3天的研究发表会。"}
      ],
      keyPoint: "可用于时间/空间/种类三种维度！修饰名词时用「にわたる」🌊",
      confusion: "vs にかけて：にかけて是从A到B的模糊区间，にわたって强调跨越的距离/时间",
      comparison: {pair:"にわたって vs にかけて", rows:[["强调跨度/长达","强调模糊区间"],["20kmにわたって","関東から東北にかけて"],["长达20公里（跨度）","从关东到东北（区间）"],["接具体数量词","接两个地点/时间"]]}
    },
    {
      name: "〜だけ（最大范围）",
      meaning: "尽可能…/全部…（强调最大可能范围）",
      structure: "動詞辞書形／できる＋だけ",
      examples: [
        {jp:"この<ruby>段<rt>だん</rt></ruby>ボールはできるだけ<ruby>車<rt>くるま</rt></ruby>に<ruby>積<rt>つ</rt></ruby>んでください。", cn:"这些纸箱能装多少就装多少到车上。"},
        {jp:"<ruby>人<rt>ひと</rt></ruby>の<ruby>数<rt>かず</rt></ruby>だけ<ruby>幸<rt>しあわ</rt></ruby>せの<ruby>形<rt>かたち</rt></ruby>があります。", cn:"有多少人就有多少种幸福的形态。"}
      ],
      keyPoint: "N2里不只是「只」的意思！重点考最大范围用法 💪",
      confusion: "vs だけ（限定）：N3的「だけ」=只/仅，N2的「だけ」=尽可能多",
      comparison: {pair:"だけ（限定）vs だけ（最大）", rows:[["只/仅仅","尽可能多/全部"],["一人だけ来た","できるだけ早く"],["只来了一个人","尽量快"],["限定少量","强调最大量"]]}
    },
    {
      name: "〜を通じて／を介して",
      meaning: "通过…（某种手段或媒介）",
      structure: "名詞＋を通じて／を介して",
      examples: [
        {jp:"インターネットを<ruby>通<rt>つう</rt></ruby>じて<ruby>世界中<rt>せかいじゅう</rt></ruby>の<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>入手<rt>にゅうしゅ</rt></ruby>できます。", cn:"通过互联网可以获取全世界的信息。"},
        {jp:"ボランティア<ruby>活動<rt>かつどう</rt></ruby>を<ruby>通<rt>つう</rt></ruby>じて<ruby>交流<rt>こうりゅう</rt></ruby>を<ruby>深<rt>ふか</rt></ruby>めました。", cn:"通过志愿活动加深了交流。"}
      ],
      keyPoint: "两者意思完全一样，を通じて更常用。注意：「今日」表如今时读「こんにち」🔗",
      confusion: "vs によって：によって侧重原因/手段，を通じて侧重媒介/途径",
      comparison: {pair:"を通じて vs によって", rows:[["通过媒介/途径","通过手段/原因"],["ネットを通じて情報入手","コンピュータ化により解決"],["通过网络获取信息","通过电脑化解决"],["强调传达途径","强调因果/方式"]]}
    }
  ],
  questions: [
    {q:"<ruby>関東<rt>かんとう</rt></ruby><ruby>地方<rt>ちほう</rt></ruby>から<ruby>東北<rt>とうほく</rt></ruby><ruby>地方<rt>ちほう</rt></ruby>＿＿＿<ruby>大雨<rt>おおあめ</rt></ruby>が<ruby>予想<rt>よそう</rt></ruby>されます。", options:["にわたって","にかけて","までに","を通じて"], answer:1, grammar:"にかけて", explanation:"从关东到东北是大致的地理范围，起止点模糊，用「にかけて」。「にわたって」强调跨度/长达，不用于从A到B的区间表达。"},
    {q:"<ruby>高速道路<rt>こうそくどうろ</rt></ruby>が20km＿＿＿<ruby>渋滞<rt>じゅうたい</rt></ruby>しています。", options:["にかけて","にわたって","を通じて","だけ"], answer:1, grammar:"にわたって", explanation:"堵了「长达」20公里，强调跨越的距离，用「にわたって」。「にかけて」需要从A到B两个点。"},
    {q:"3<ruby>日間<rt>みっかかん</rt></ruby>＿＿＿<ruby>研究<rt>けんきゅう</rt></ruby><ruby>発表会<rt>はっぴょうかい</rt></ruby>が<ruby>開催<rt>かいさい</rt></ruby>されます。", options:["にかけての","だけの","にわたる","を通じた"], answer:2, grammar:"にわたる", explanation:"长达3天的发表会，修饰后面的名词「発表会」所以用连体形「にわたる」。"},
    {q:"インターネット＿＿＿<ruby>世界中<rt>せかいじゅう</rt></ruby>の<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>入手<rt>にゅうしゅ</rt></ruby>できます。", options:["にわたって","にかけて","を通じて","だけで"], answer:2, grammar:"を通じて", explanation:"通过互联网获取信息，互联网是媒介/途径，用「を通じて」。"},
    {q:"ボランティア<ruby>活動<rt>かつどう</rt></ruby>＿＿＿<ruby>交流<rt>こうりゅう</rt></ruby>を<ruby>深<rt>ふか</rt></ruby>めました。", options:["にわたって","にかけて","だけ","を通じて"], answer:3, grammar:"を通じて", explanation:"通过志愿活动加深交流，志愿活动是媒介手段，用「を通じて」。"},
    {q:"この<ruby>段<rt>だん</rt></ruby>ボールはできる＿＿＿<ruby>車<rt>くるま</rt></ruby>に<ruby>積<rt>つ</rt></ruby>んでください。", options:["だけ","ほど","まで","ばかり"], answer:0, grammar:"だけ", explanation:"能装多少就装多少，「できるだけ」是N2高频搭配，表示最大限度/尽可能。"},
    {q:"<ruby>午前<rt>ごぜん</rt></ruby>9<ruby>時<rt>じ</rt></ruby>から<ruby>午後<rt>ごご</rt></ruby>5<ruby>時<rt>じ</rt></ruby>＿＿＿<ruby>会議<rt>かいぎ</rt></ruby>があります。", options:["にかけて","にわたって","まで","を通じて"], answer:2, grammar:"まで", explanation:"9点到5点是精确时间范围，用「から〜まで」。「にかけて」是模糊范围。"},
    {q:"さまざまな<ruby>分野<rt>ぶんや</rt></ruby>＿＿＿<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます。", options:["にかけて","を通じて","にわたって","だけ"], answer:2, grammar:"にわたって", explanation:"涉及各种领域地读书，强调范围广泛（种类跨度），用「にわたって」。"}
  ]
},

"Day4": {
  title: "第5課 语法（限定表达）",
  grammar: [
    {
      name: "〜に限り",
      meaning: "仅限于…（正式限定条件）",
      structure: "名詞＋に限り",
      examples: [
        {jp:"このチラシを<ruby>持<rt>も</rt></ruby>っているお<ruby>客様<rt>きゃくさま</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>り、<ruby>全<rt>ぜん</rt></ruby><ruby>商品<rt>しょうひん</rt></ruby>9<ruby>割引<rt>わりびき</rt></ruby>です。", cn:"仅限持本传单的顾客享受全商品9折优惠。"},
        {jp:"<ruby>欠席<rt>けっせき</rt></ruby><ruby>理由<rt>りゆう</rt></ruby>が<ruby>正当<rt>せいとう</rt></ruby>な<ruby>場合<rt>ばあい</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>り、<ruby>出席<rt>しゅっせき</rt></ruby>とみなします。", cn:"仅在缺席理由正当的情况下视为出席。"}
      ],
      keyPoint: "多用于书面/正式场合，考试送分题！看到正式限定就选它 🔒",
      confusion: "vs に限って：に限り=正式限定，に限って=偏偏/唯独",
      comparison: {pair:"に限り vs に限って", rows:[["正式限定条件","偏偏/唯独（口语）"],["仅限于…","偏偏在…时候"],["会員に限り割引","今日に限って雨"],["仅限会员享折扣","偏偏今天下雨"]]}
    },
    {
      name: "〜限り（条件）",
      meaning: "只要…就…（条件充分性）",
      structure: "動詞辞書形／ない形／名詞＋である＋限り",
      examples: [
        {jp:"この<ruby>街<rt>まち</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいる<ruby>限<rt>かぎ</rt></ruby>り、いつでも<ruby>新鮮<rt>しんせん</rt></ruby>な<ruby>野菜<rt>やさい</rt></ruby>が<ruby>手<rt>て</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ります。", cn:"只要住在这个城市，随时都能买到新鲜蔬菜。"},
        {jp:"<ruby>社長<rt>しゃちょう</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>えが<ruby>変<rt>か</rt></ruby>わらない<ruby>限<rt>かぎ</rt></ruby>り、<ruby>会社<rt>かいしゃ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>も<ruby>変<rt>か</rt></ruby>わらないだろう。", cn:"只要社长想法不变，公司就不会有任何变化。"}
      ],
      keyPoint: "常搭配「いつでも」「必ず」等副词。否定条件也能用：～ない限り 🔗",
      confusion: "vs ば/たら：限り强调条件持续存在期间一直如此，ば/たら是单次假设",
      comparison: {pair:"限り vs ば", rows:[["条件持续期间","单次假设"],["住んでいる限り","住んでいれば"],["只要一直住着","如果住的话"],["强调持续性","强调一次性"]]}
    },
    {
      name: "〜限りでは",
      meaning: "在…范围内/据我所知",
      structure: "動詞普通形／名詞＋の＋限りでは",
      examples: [
        {jp:"<ruby>私<rt>わたし</rt></ruby>の<ruby>知<rt>し</rt></ruby>っている<ruby>限<rt>かぎ</rt></ruby>りでは、この<ruby>辺<rt>あた</rt></ruby>りに<ruby>花屋<rt>はなや</rt></ruby>はありません。", cn:"据我所知，这附近没有花店。"},
        {jp:"<ruby>今回<rt>こんかい</rt></ruby>の<ruby>調査<rt>ちょうさ</rt></ruby>の<ruby>範囲<rt>はんい</rt></ruby><ruby>限<rt>かぎ</rt></ruby>りでは、<ruby>書類<rt>しょるい</rt></ruby>に<ruby>誤<rt>あやま</rt></ruby>りはなかった。", cn:"在本次调查范围内，文件没有错误。"}
      ],
      keyPoint: "「私の知っている限りでは」是超常用套话，考试高频！📏",
      confusion: "vs 限り（条件）：限りでは=范围限定（据…所知），限り=条件（只要…就…）",
      comparison: {pair:"限りでは vs 限り", rows:[["范围限定","条件充分"],["据我所知…","只要…就…"],["知っている限りでは","住んでいる限り"],["限定认知范围","表示条件持续"]]}
    },
    {
      name: "〜に限って",
      meaning: "偏偏/唯独…（与平日不同/与预期相反/特别信任）",
      structure: "名詞＋に限って",
      examples: [
        {jp:"<ruby>庭<rt>にわ</rt></ruby>の<ruby>手入<rt>ていれ</rt></ruby>れをしようとした<ruby>日<rt>ひ</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>って、<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>った。", cn:"偏偏想整理庭院的那天，下了雨。"},
        {jp:"うちの<ruby>子<rt>こ</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>って、<ruby>友達<rt>ともだち</rt></ruby>をいじめるようなことはしない。", cn:"我家孩子绝不会做欺负朋友的事。"}
      ],
      keyPoint: "三种用法：①与平日不同（偏偏）②与预期相反（偏巧）③特别信任（绝不会）😤",
      confusion: "vs に限り：に限り是正式限定，に限って是口语化的偏偏/唯独",
      comparison: {pair:"に限って三种用法", rows:[["与平日不同","与预期相反","特别信任"],["偏偏今天…","偏巧在…时候","唯独我家孩子…"],["今日に限って遅刻","傘がない日に限って雨","うちの子に限って"],["意外反常","无奈不巧","主观确信"]]}
    }
  ],
  questions: [
    {q:"<ruby>会員<rt>かいいん</rt></ruby>の<ruby>方<rt>かた</rt></ruby>＿＿＿、<ruby>特別<rt>とくべつ</rt></ruby><ruby>割引<rt>わりびき</rt></ruby>がございます。", options:["に限り","に限って","限りでは","限り"], answer:0, grammar:"に限り", explanation:"仅限会员享受特别折扣，正式限定条件用「に限り」。这是告示/通知语气。"},
    {q:"この<ruby>街<rt>まち</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいる＿＿＿、いつでも<ruby>新鮮<rt>しんせん</rt></ruby>な<ruby>野菜<rt>やさい</rt></ruby>が<ruby>手<rt>て</rt></ruby>に<ruby>入<rt>はい</rt></ruby>る。", options:["に限り","に限って","限り","限りでは"], answer:2, grammar:"限り", explanation:"只要住在这里就能买到新鲜蔬菜，条件充分性用「限り」。搭配「いつでも」是典型用法。"},
    {q:"<ruby>私<rt>わたし</rt></ruby>の<ruby>知<rt>し</rt></ruby>っている＿＿＿、この<ruby>辺<rt>あた</rt></ruby>りにコンビニはない。", options:["限り","に限り","限りでは","に限って"], answer:2, grammar:"限りでは", explanation:"据我所知这附近没有便利店，认知范围限定用「限りでは」。"},
    {q:"いつもは<ruby>遅刻<rt>ちこく</rt></ruby>しない<ruby>彼<rt>かれ</rt></ruby>が、<ruby>今日<rt>きょう</rt></ruby>＿＿＿<ruby>遅<rt>おく</rt></ruby>れてきた。", options:["限り","に限り","限りでは","に限って"], answer:3, grammar:"に限って", explanation:"平时不迟到的他偏偏今天迟到了，与平日反常用「に限って」。"},
    {q:"うちの<ruby>子<rt>こ</rt></ruby>＿＿＿、そんなことをするはずがない。", options:["に限り","に限って","限り","限りでは"], answer:1, grammar:"に限って", explanation:"我家孩子绝不会做那种事，特别信任/深信不疑用「に限って」。"},
    {q:"<ruby>社長<rt>しゃちょう</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>えが<ruby>変<rt>か</rt></ruby>わらない＿＿＿、<ruby>会社<rt>かいしゃ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>も<ruby>変<rt>か</rt></ruby>わらないだろう。", options:["に限り","に限って","限り","限りでは"], answer:2, grammar:"限り", explanation:"只要社长想法不变公司就不会变，否定条件+限り=只要不…就…。"},
    {q:"<ruby>傘<rt>かさ</rt></ruby>を<ruby>持<rt>も</rt></ruby>っていない<ruby>日<rt>ひ</rt></ruby>＿＿＿、<ruby>雨<rt>あめ</rt></ruby>に<ruby>降<rt>ふ</rt></ruby>られる。", options:["に限り","限り","限りでは","に限って"], answer:3, grammar:"に限って", explanation:"偏偏在没带伞的日子下雨，与预期相反/不凑巧用「に限って」。"},
    {q:"<ruby>今回<rt>こんかい</rt></ruby>の<ruby>調査<rt>ちょうさ</rt></ruby>の<ruby>範囲<rt>はんい</rt></ruby>＿＿＿、<ruby>書類<rt>しょるい</rt></ruby>に<ruby>誤<rt>あやま</rt></ruby>りはなかった。", options:["に限り","に限って","限り","限りでは"], answer:3, grammar:"限りでは", explanation:"在本次调查范围内没有错误，调查范围限定用「限りでは」。"}
  ]
},

"Day5": {
  title: "第6課 语法（递进：不仅…而且…）",
  grammar: [
    {
      name: "〜に限らず",
      meaning: "不仅限于…（范围不只是某个领域）",
      structure: "名詞＋に限らず",
      examples: [
        {jp:"この<ruby>記念館<rt>きねんかん</rt></ruby>は<ruby>休日<rt>きゅうじつ</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>らず、<ruby>一年中<rt>いちねんじゅう</rt></ruby><ruby>入館者<rt>にゅうかんしゃ</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い。", cn:"这个纪念馆不仅休息日，全年游客都很多。"},
        {jp:"<ruby>我<rt>わ</rt></ruby>が<ruby>家<rt>や</rt></ruby>の<ruby>近所<rt>きんじょ</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>らず、<ruby>周辺<rt>しゅうへん</rt></ruby>の<ruby>住民<rt>じゅうみん</rt></ruby>も<ruby>悩<rt>なや</rt></ruby>まされている。", cn:"不仅我家附近，周边居民也被困扰。"}
      ],
      keyPoint: "前接名词，表示不仅限于某一范围 🌐",
      confusion: "vs ばかりか：に限らず强调范围不限，ばかりか强调递进（不仅…还…）",
      comparison: {pair:"に限らず vs ばかりか", rows:[["范围不限于","不仅…而且…"],["休日に限らず","子供ばかりか"],["不仅限于休息日","不仅小孩"],["范围扩展","递进加强"]]}
    },
    {
      name: "〜のみならず",
      meaning: "不仅…而且…（超正式书面语）",
      structure: "名詞＋のみならず",
      examples: [
        {jp:"<ruby>電気代<rt>でんきだい</rt></ruby>のみならず、ガス<ruby>代<rt>だい</rt></ruby>も<ruby>値上<rt>ねあ</rt></ruby>がりする。", cn:"不仅电费，煤气费也涨了。"},
        {jp:"<ruby>差別的<rt>さべつてき</rt></ruby>な<ruby>発言<rt>はつげん</rt></ruby>をしたのみならず、<ruby>謝罪<rt>しゃざい</rt></ruby>もしなかった。", cn:"不仅发表歧视性言论，也未道歉。"}
      ],
      keyPoint: "最正式的递进表达，书面语感强 📜",
      confusion: "vs ばかりか：意思相同，のみならず更书面正式",
      comparison: {pair:"のみならず vs ばかりか", rows:[["超正式书面","口语常用"],["新闻/论文","日常对话"],["電気代のみならず","電気代ばかりか"],["电费不仅（正式）","电费不仅（口语）"]]}
    },
    {
      name: "〜ばかりか",
      meaning: "不仅…而且…（口语常用，带惊讶语气）",
      structure: "名詞／動詞普通形＋ばかりか",
      examples: [
        {jp:"<ruby>子供<rt>こども</rt></ruby>ばかりか、<ruby>大人<rt>おとな</rt></ruby>にも<ruby>分<rt>わ</rt></ruby>かりやすい。", cn:"不仅小孩，大人也容易懂。"},
        {jp:"<ruby>発見<rt>はっけん</rt></ruby>が<ruby>遅<rt>おそ</rt></ruby>かったばかりでなく、<ruby>対策<rt>たいさく</rt></ruby>にも<ruby>時間<rt>じかん</rt></ruby>がかかった。", cn:"不仅发现晚，对策也耗时。"}
      ],
      keyPoint: "常和「も」搭配加强语气：〜ばかりか〜も。「ばかりでなく」也一样 😱",
      confusion: "vs はもちろん：ばかりか带惊讶感，はもちろん表自不必说",
      comparison: {pair:"ばかりか vs はもちろん", rows:[["不仅…而且（惊讶）","…自不必说"],["递进+意外","递进+理所当然"],["子供ばかりか大人にも","本人はもちろん周囲にも"],["小孩不仅（竟然大人也）","本人自不必说（周围也）"]]}
    },
    {
      name: "〜はもちろん",
      meaning: "…自不必说（递进表达）",
      structure: "名詞＋はもちろん",
      examples: [
        {jp:"タバコは<ruby>本人<rt>ほんにん</rt></ruby>はもちろん、<ruby>周囲<rt>しゅうい</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>にも<ruby>危害<rt>きがい</rt></ruby>を<ruby>及<rt>およ</rt></ruby>ぼす。", cn:"香烟不仅危害本人，也波及周围人。"},
        {jp:"<ruby>健康<rt>けんこう</rt></ruby><ruby>管理<rt>かんり</rt></ruby>はもちろん、<ruby>家族<rt>かぞく</rt></ruby>の<ruby>心身<rt>しんしん</rt></ruby>の<ruby>健康<rt>けんこう</rt></ruby>にも<ruby>気<rt>き</rt></ruby>を<ruby>配<rt>くば</rt></ruby>らなければならない。", cn:"健康管理自不必说，还需关注家人身心健康。"}
      ],
      keyPoint: "N3就学过的递进表达升级版，表示A理所当然，B也一样 ✅",
      confusion: "vs ばかりか：はもちろん没有惊讶感，只是补充说明",
      comparison: {pair:"五大递进语法", rows:[["に限らず","のみならず","ばかりか","はもちろん","ばかりでなく"],["范围不限","书面正式","口语惊讶","自不必说","通用"],["名詞+","名詞+","普通形+","名詞+","普通形+"]]}
    }
  ],
  questions: [
    {q:"この<ruby>記念館<rt>きねんかん</rt></ruby>は<ruby>休日<rt>きゅうじつ</rt></ruby>＿＿＿、<ruby>平日<rt>へいじつ</rt></ruby>も<ruby>入館者<rt>にゅうかんしゃ</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い。", options:["に限らず","のみならず","ばかりか","はもちろん"], answer:0, grammar:"に限らず", explanation:"不仅限于休息日，强调范围不限于某个领域，用「に限らず」。"},
    {q:"<ruby>電気代<rt>でんきだい</rt></ruby>＿＿＿、ガス<ruby>代<rt>だい</rt></ruby>も<ruby>値上<rt>ねあ</rt></ruby>がりしている。", options:["に限らず","のみならず","はもちろん","ばかりでなく"], answer:1, grammar:"のみならず", explanation:"不仅电费还有煤气费也涨了，正式书面语气用「のみならず」。"},
    {q:"<ruby>田島<rt>たじま</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>は<ruby>子供<rt>こども</rt></ruby>＿＿＿、<ruby>大人<rt>おとな</rt></ruby>にも<ruby>分<rt>わ</rt></ruby>かりやすい。", options:["に限らず","のみならず","ばかりか","はもちろん"], answer:2, grammar:"ばかりか", explanation:"不仅小孩大人也易懂，口语化递进用「ばかりか」。"},
    {q:"タバコは<ruby>本人<rt>ほんにん</rt></ruby>＿＿＿、<ruby>周囲<rt>しゅうい</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>にも<ruby>危害<rt>きがい</rt></ruby>を<ruby>及<rt>およ</rt></ruby>ぼす。", options:["に限らず","のみならず","ばかりか","はもちろん"], answer:3, grammar:"はもちろん", explanation:"本人自不必说周围人也受危害，用「はもちろん」。"},
    {q:"<ruby>彼<rt>かれ</rt></ruby>は<ruby>差別的<rt>さべつてき</rt></ruby>な<ruby>発言<rt>はつげん</rt></ruby>をした＿＿＿、<ruby>謝罪<rt>しゃざい</rt></ruby>もしなかった。", options:["に限らず","のみならず","はもちろん","ばかりか"], answer:1, grammar:"のみならず", explanation:"不仅发表歧视言论还不道歉，严肃书面语境用「のみならず」。"},
    {q:"<ruby>発見<rt>はっけん</rt></ruby>が<ruby>遅<rt>おそ</rt></ruby>かった＿＿＿、<ruby>対策<rt>たいさく</rt></ruby>にも<ruby>時間<rt>じかん</rt></ruby>がかかった。", options:["ばかりでなく","に限らず","はもちろん","のみならず"], answer:0, grammar:"ばかりでなく", explanation:"不仅发现晚对策也耗时，通用递进表达用「ばかりでなく」。动词接续。"},
    {q:"マラソン<ruby>大会<rt>たいかい</rt></ruby>には<ruby>男性<rt>だんせい</rt></ruby>＿＿＿、<ruby>女性<rt>じょせい</rt></ruby>も<ruby>参加<rt>さんか</rt></ruby>できる。", options:["に限らず","のみならず","ばかりか","はもちろん"], answer:0, grammar:"に限らず", explanation:"不仅限于男性女性也能参加，范围不限定用「に限らず」。"},
    {q:"<ruby>健康<rt>けんこう</rt></ruby><ruby>管理<rt>かんり</rt></ruby>＿＿＿、<ruby>家族<rt>かぞく</rt></ruby>の<ruby>心身<rt>しんしん</rt></ruby>の<ruby>健康<rt>けんこう</rt></ruby>にも<ruby>気<rt>き</rt></ruby>を<ruby>配<rt>くば</rt></ruby>らなければならない。", options:["ばかりか","に限らず","はもちろん","のみならず"], answer:2, grammar:"はもちろん", explanation:"健康管理自不必说，还要关注家人身心健康，用「はもちろん」。"}
  ]
},

"Day6": {
  title: "第7課 语法（关于/围绕/对于/响应）",
  grammar: [
    {
      name: "〜に関して",
      meaning: "关于/涉及…（书面表达）",
      structure: "名詞＋に関して／に関する（修饰名詞）",
      examples: [
        {jp:"<ruby>今回<rt>こんかい</rt></ruby>の<ruby>事件<rt>じけん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>して<ruby>何<rt>なに</rt></ruby>か<ruby>分<rt>わ</rt></ruby>かりましたか。", cn:"关于这次事件了解到什么了吗？"},
        {jp:"<ruby>高齢者<rt>こうれいしゃ</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>するアンケートにご<ruby>協力<rt>きょうりょく</rt></ruby>ください。", cn:"请配合关于老年人生活的问卷。"}
      ],
      keyPoint: "更正式说法：に関しまして。修饰名词时必须用「に関する」📋",
      confusion: "vs について：几乎相同，に関して更正式书面",
      comparison: {pair:"に関して vs について", rows:[["正式书面","通用口语"],["事件に関して","事件について"],["两者可替换","について更常用"]]}
    },
    {
      name: "〜をめぐって",
      meaning: "围绕…（多人参与的争论/讨论）",
      structure: "名詞＋をめぐって／をめぐる（修饰名詞）",
      examples: [
        {jp:"<ruby>親<rt>おや</rt></ruby>が<ruby>残<rt>のこ</rt></ruby>した<ruby>土地<rt>とち</rt></ruby>をめぐって<ruby>親族<rt>しんぞく</rt></ruby>が<ruby>争<rt>あらそ</rt></ruby>っている。", cn:"围绕父母留下的土地，亲属们在争夺。"},
        {jp:"<ruby>消費税<rt>しょうひぜい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>をめぐり<ruby>国会<rt>こっかい</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きく<ruby>揺<rt>ゆ</rt></ruby>れた。", cn:"围绕消费税问题国会大受震动。"}
      ],
      keyPoint: "⚠️ 关键：后面的动作主体必须是多人！单人讲演不能用！🔄",
      confusion: "中国人易犯错：不能说「問題をめぐって講演する」（单人动作❌），要说「討論する」（多人✅）",
      comparison: {pair:"をめぐって vs に関して", rows:[["围绕（多人争论）","关于（话题引出）"],["必须多人参与","无人数限制"],["土地をめぐって争う","事件に関して調べる"],["围绕土地争夺","关于事件调查"]]}
    },
    {
      name: "〜に対して",
      meaning: "①对于…（方向/对象）②与…相反（对比）",
      structure: "名詞＋に対して／に対する（修饰名詞）",
      examples: [
        {jp:"<ruby>尊長<rt>そんちょう</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>乱暴<rt>らんぼう</rt></ruby>な<ruby>言<rt>い</rt></ruby>い<ruby>方<rt>かた</rt></ruby>をしてはいけません。", cn:"不能对长辈用粗暴的说法。"},
        {jp:"<ruby>父<rt>ちち</rt></ruby>は<ruby>感情<rt>かんじょう</rt></ruby>が<ruby>激<rt>はげ</rt></ruby>しいのに<ruby>対<rt>たい</rt></ruby>して、<ruby>母<rt>はは</rt></ruby>は<ruby>冷静<rt>れいせい</rt></ruby>だ。", cn:"父亲感情激烈，与之相反母亲很冷静。"}
      ],
      keyPoint: "区分技巧：前面有「の」100%是对比意思！🎯",
      confusion: "vs にとって：に対して=方向/对象，にとって=站在某人立场",
      comparison: {pair:"に対して vs にとって", rows:[["对于（方向/对象）","对于（立场/视角）"],["社長に対して不満","私にとって大切"],["对社长有不满","对我来说重要"],["行为指向","判断立场"]]}
    },
    {
      name: "〜に応えて",
      meaning: "响应/回应某种要求或期待",
      structure: "名詞＋に応えて／に応える（修饰名詞）",
      examples: [
        {jp:"<ruby>応援<rt>おうえん</rt></ruby>してくれる<ruby>人<rt>ひと</rt></ruby>の<ruby>気持<rt>きも</rt></ruby>ちに<ruby>応<rt>こた</rt></ruby>えて、<ruby>良<rt>よ</rt></ruby>い<ruby>試合<rt>しあい</rt></ruby>をします。", cn:"回应支持者的心意，好好比赛。"},
        {jp:"<ruby>国民<rt>こくみん</rt></ruby>のご<ruby>要望<rt>ようぼう</rt></ruby>に<ruby>応<rt>こた</rt></ruby>える<ruby>政治<rt>せいじ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>います。", cn:"进行回应国民要求的政治。"}
      ],
      keyPoint: "常搭配：要望・期待・アンコール・気持ち 💪",
      confusion: "vs に対して：に応えて=积极回应期待，に対して=面向对象",
      comparison: {pair:"に応えて vs に対して", rows:[["回应期待/要求","面向对象/方向"],["気持ちに応えて","社長に対して"],["回应心意","对社长"],["积极响应","方向指向"]]}
    }
  ],
  questions: [
    {q:"<ruby>高齢者<rt>こうれいしゃ</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>＿＿＿アンケートにご<ruby>協力<rt>きょうりょく</rt></ruby>ください。", options:["をめぐる","に関する","に対する","に応える"], answer:1, grammar:"に関する", explanation:"关于老年人生活的问卷，引出话题用「に関する」修饰名词。"},
    {q:"<ruby>消費税<rt>しょうひぜい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>＿＿＿<ruby>国会<rt>こっかい</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きく<ruby>揺<rt>ゆ</rt></ruby>れた。", options:["に関して","をめぐり","に対して","に応えて"], answer:1, grammar:"をめぐり", explanation:"围绕消费税问题国会动荡，多方参与的争论用「をめぐり」。"},
    {q:"<ruby>尊長<rt>そんちょう</rt></ruby>＿＿＿<ruby>乱暴<rt>らんぼう</rt></ruby>な<ruby>言<rt>い</rt></ruby>い<ruby>方<rt>かた</rt></ruby>をしてはいけません。", options:["に関して","をめぐって","に対して","に応えて"], answer:2, grammar:"に対して", explanation:"对长辈不能粗暴说话，行为指向对象用「に対して」。"},
    {q:"<ruby>応援<rt>おうえん</rt></ruby>してくれる<ruby>人<rt>ひと</rt></ruby>の<ruby>気持<rt>きも</rt></ruby>ち＿＿＿、<ruby>良<rt>よ</rt></ruby>い<ruby>試合<rt>しあい</rt></ruby>をします。", options:["に関して","をめぐって","に対して","に応えて"], answer:3, grammar:"に応えて", explanation:"回应支持者的心意好好比赛，响应期待用「に応えて」。"},
    {q:"<ruby>父<rt>ちち</rt></ruby>は<ruby>感情<rt>かんじょう</rt></ruby>が<ruby>激<rt>はげ</rt></ruby>しい＿＿＿、<ruby>母<rt>はは</rt></ruby>は<ruby>冷静<rt>れいせい</rt></ruby>で<ruby>穏<rt>おだ</rt></ruby>やかだ。", options:["に関して","をめぐって","のに対して","に応えて"], answer:2, grammar:"のに対して", explanation:"父亲感情激烈与之相反母亲冷静温和，前有「の」100%是对比用法。"},
    {q:"<ruby>彼女<rt>かのじょ</rt></ruby>の<ruby>行動<rt>こうどう</rt></ruby>＿＿＿<ruby>噂<rt>うわさ</rt></ruby>が<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>広<rt>ひろ</rt></ruby>がった。", options:["に関する","をめぐる","に対する","に応える"], answer:1, grammar:"をめぐる", explanation:"围绕她行为的传言扩散，多人议论用「をめぐる」修饰名词。"},
    {q:"<ruby>今回<rt>こんかい</rt></ruby>の<ruby>事件<rt>じけん</rt></ruby>＿＿＿、<ruby>何<rt>なに</rt></ruby>か<ruby>詳<rt>くわ</rt></ruby>しいことが<ruby>分<rt>わ</rt></ruby>かりましたか。", options:["に関して","をめぐって","に対して","に応えて"], answer:0, grammar:"に関して", explanation:"关于这次事件了解到什么了吗，引出话题用「に関して」。"},
    {q:"<ruby>国民<rt>こくみん</rt></ruby>の<ruby>要望<rt>ようぼう</rt></ruby>＿＿＿<ruby>政治<rt>せいじ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>います。", options:["に関する","をめぐる","に対する","に応える"], answer:3, grammar:"に応える", explanation:"回应国民要求进行政治改革，响应要求修饰名词用「に応える」。"}
  ]
},

"Day7": {
  title: "第8課 语法（基础/依据/面向）",
  grammar: [
    {
      name: "〜をもとに（して）",
      meaning: "以…为基础/素材（用于抽象概念）",
      structure: "名詞＋をもとに／をもとにした（修饰名詞）",
      examples: [
        {jp:"この<ruby>小説<rt>しょうせつ</rt></ruby>は<ruby>作者<rt>さくしゃ</rt></ruby>の<ruby>体験<rt>たいけん</rt></ruby>をもとに<ruby>書<rt>か</rt></ruby>いたものだ。", cn:"这部小说是以作者的经历为素材写的。"},
        {jp:"あの<ruby>飛行機<rt>ひこうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>をもとにした<ruby>映画<rt>えいが</rt></ruby>が<ruby>大<rt>おお</rt></ruby>ヒットした。", cn:"以那次飞机事故为题材的电影大卖。"}
      ],
      keyPoint: "⚠️ 不能用于具体材料！猪肉做汉堡要用「で」，葡萄酿酒用「から」🎨",
      confusion: "vs に基づいて：をもとに=创作素材（抽象），に基づいて=依据事实（客观数据）",
      comparison: {pair:"をもとに vs に基づいて", rows:[["创作素材（抽象）","依据事实（客观）"],["体験をもとに小説を書く","データに基づいて計画を立てる"],["以经历为素材写小说","基于数据制定计划"],["可以有创作加工","忠实于原始数据"]]}
    },
    {
      name: "〜に基づいて",
      meaning: "基于…（数据/事实/计划）",
      structure: "名詞＋に基づいて／に基づいた（修饰名詞）",
      examples: [
        {jp:"<ruby>最新<rt>さいしん</rt></ruby>のデータに<ruby>基<rt>もと</rt></ruby>づいて<ruby>計画<rt>けいかく</rt></ruby>を<ruby>立<rt>た</rt></ruby>てたい。", cn:"想基于最新数据制定计划。"},
        {jp:"<ruby>科学的<rt>かがくてき</rt></ruby>な<ruby>実験<rt>じっけん</rt></ruby><ruby>結果<rt>けっか</rt></ruby>に<ruby>基<rt>もと</rt></ruby>づいたトレーニング<ruby>方法<rt>ほうほう</rt></ruby>。", cn:"基于科学实验结果的训练方法。"}
      ],
      keyPoint: "常搭配：データ・調査・計画・結果 📊",
      confusion: "vs をもとに：に基づいて强调忠实于客观依据，不能有主观加工",
      comparison: {pair:"に基づいて vs に沿って", rows:[["基于（客观依据）","按照（指示方针）"],["データに基づいて","方針に沿って"],["基于数据","按照方针"],["忠实于事实","遵循原则"]]}
    },
    {
      name: "〜に沿って",
      meaning: "按照…（方针/指示/期待）",
      structure: "名詞＋に沿って／に沿った（修饰名詞）",
      examples: [
        {jp:"<ruby>政府<rt>せいふ</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby><ruby>方針<rt>ほうしん</rt></ruby>に<ruby>沿<rt>そ</rt></ruby>って<ruby>予算案<rt>よさんあん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>っている。", cn:"按照政府基本方针制定预算案。"},
        {jp:"<ruby>先生<rt>せんせい</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>に<ruby>沿<rt>そ</rt></ruby>ってレポートを<ruby>書<rt>か</rt></ruby>いてください。", cn:"请按照老师的指示写报告。"}
      ],
      keyPoint: "遵循抽象原则，多用于正式场合（政策、指令）📐",
      confusion: "vs 通りに：に沿って=遵循抽象原则，通りに=完全按照具体指示",
      comparison: {pair:"に沿って vs 通りに", rows:[["遵循抽象原则","完全按照具体指示"],["方針に沿って","説明書通りに"],["按照方针（可灵活）","按照说明书（一模一样）"]]}
    },
    {
      name: "〜のもとで",
      meaning: "在…之下/影响下",
      structure: "名詞＋のもとで",
      examples: [
        {jp:"<ruby>新<rt>あたら</rt></ruby>しい<ruby>監督<rt>かんとく</rt></ruby>のもとで<ruby>練習<rt>れんしゅう</rt></ruby>に<ruby>励<rt>はげ</rt></ruby>んでいる。", cn:"在新教练的指导下努力训练。"},
        {jp:"<ruby>優<rt>やさ</rt></ruby>しい<ruby>祖母<rt>そぼ</rt></ruby>のもとで<ruby>幸<rt>しあわ</rt></ruby>せに<ruby>暮<rt>く</rt></ruby>らしてきました。", cn:"在慈祥的祖母身边幸福地生活。"}
      ],
      keyPoint: "翻译很灵活：指导下/身边/条件下，看语境定 🏠",
      confusion: "翻译不固定，需根据前面名词灵活处理",
      comparison: {pair:"のもとで的多种翻译", rows:[["人+のもとで=指导下","条件+のもとで=条件下"],["監督のもとで練習","温度のもとで育てる"],["教练指导下训练","在某温度条件下培育"]]}
    },
    {
      name: "〜向けだ",
      meaning: "面向…（特定对象群体）",
      structure: "名詞＋向けに／向けの／向けだ",
      examples: [
        {jp:"<ruby>一人暮<rt>ひとりぐ</rt></ruby>らしの<ruby>高齢者<rt>こうれいしゃ</rt></ruby><ruby>向<rt>む</rt></ruby>けに<ruby>設計<rt>せっけい</rt></ruby>されている。", cn:"面向独居老人设计的。"},
        {jp:"<ruby>理科<rt>りか</rt></ruby>が<ruby>好<rt>す</rt></ruby>きな<ruby>子供<rt>こども</rt></ruby><ruby>向<rt>む</rt></ruby>けに<ruby>編集<rt>へんしゅう</rt></ruby>された<ruby>雑誌<rt>ざっし</rt></ruby>。", cn:"面向喜欢理科的儿童编辑的杂志。"}
      ],
      keyPoint: "常见对象：高齢者・子供・初心者・海外市場 🎯",
      confusion: "向けに（动作方向）vs 向けの（修饰名词）vs 向けだ（句尾判断）",
      comparison: {pair:"向け三种形式", rows:[["向けに","向けの","向けだ"],["面向…地（动作）","面向…的（名词）","是面向…的"],["子供向けに作る","子供向けの本","この本は子供向けだ"]]}
    }
  ],
  questions: [
    {q:"この<ruby>映画<rt>えいが</rt></ruby>は<ruby>実話<rt>じつわ</rt></ruby>＿＿＿<ruby>作<rt>つく</rt></ruby>られたものです。", options:["に基づいて","をもとに","に沿って","のもとで"], answer:1, grammar:"をもとに", explanation:"以真实故事为素材制作的电影，抽象素材用「をもとに」。"},
    {q:"<ruby>調査<rt>ちょうさ</rt></ruby><ruby>結果<rt>けっか</rt></ruby>＿＿＿<ruby>報告書<rt>ほうこくしょ</rt></ruby>を<ruby>作成<rt>さくせい</rt></ruby>した。", options:["をもとに","に基づいて","に沿って","のもとで"], answer:1, grammar:"に基づいて", explanation:"基于调查结果编写报告，依据客观数据用「に基づいて」。"},
    {q:"<ruby>先生<rt>せんせい</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>＿＿＿レポートを<ruby>書<rt>か</rt></ruby>いてください。", options:["をもとに","に基づいて","に沿って","のもとで"], answer:2, grammar:"に沿って", explanation:"按照老师的指示写报告，遵循指示用「に沿って」。"},
    {q:"<ruby>新<rt>あたら</rt></ruby>しい<ruby>監督<rt>かんとく</rt></ruby>＿＿＿<ruby>練習<rt>れんしゅう</rt></ruby>に<ruby>励<rt>はげ</rt></ruby>んでいる。", options:["をもとに","に基づいて","に沿って","のもとで"], answer:3, grammar:"のもとで", explanation:"在新教练的指导下努力训练，人的指导下用「のもとで」。"},
    {q:"この<ruby>雑誌<rt>ざっし</rt></ruby>は<ruby>子供<rt>こども</rt></ruby>＿＿＿<ruby>編集<rt>へんしゅう</rt></ruby>されている。", options:["をもとに","のもとで","向けに","に沿って"], answer:2, grammar:"向けに", explanation:"面向儿童编辑的杂志，特定对象群体用「向けに」。"},
    {q:"あの<ruby>飛行機<rt>ひこうき</rt></ruby><ruby>事故<rt>じこ</rt></ruby>＿＿＿<ruby>映画<rt>えいが</rt></ruby>が<ruby>大<rt>おお</rt></ruby>ヒットした。", options:["をもとにした","に基づいた","に沿った","のもとの"], answer:0, grammar:"をもとにした", explanation:"以飞机事故为题材的电影大卖，抽象素材修饰名词用「をもとにした」。"},
    {q:"<ruby>科学的<rt>かがくてき</rt></ruby>な<ruby>実験<rt>じっけん</rt></ruby><ruby>結果<rt>けっか</rt></ruby>＿＿＿トレーニング<ruby>方法<rt>ほうほう</rt></ruby>。", options:["をもとにした","に基づいた","に沿った","向けの"], answer:1, grammar:"に基づいた", explanation:"基于科学实验结果的训练方法，客观依据修饰名词用「に基づいた」。"},
    {q:"<ruby>海外<rt>かいがい</rt></ruby><ruby>市場<rt>しじょう</rt></ruby>＿＿＿の<ruby>商品<rt>しょうひん</rt></ruby>を<ruby>開発<rt>かいはつ</rt></ruby>する。", options:["をもとに","のもとで","向け","に沿った"], answer:2, grammar:"向け", explanation:"开发面向海外市场的商品，面向特定市场用「向け」。"}
  ]
},

"Day8": {
  title: "第9課 语法（をはじめ/を中心に/をきっかけに/を問わず）",
  grammar: [
    {
      name: "〜をはじめ（として）",
      meaning: "以…为首/为代表（列举典型后暗示还有更多）",
      structure: "名詞＋をはじめ（として）",
      examples: [
        {jp:"<ruby>東京<rt>とうきょう</rt></ruby>をはじめ、<ruby>日本<rt>にほん</rt></ruby>の<ruby>大都市<rt>だいとし</rt></ruby>は<ruby>人口<rt>じんこう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い。", cn:"以东京为首，日本的大城市人口都很多。"},
        {jp:"<ruby>社長<rt>しゃちょう</rt></ruby>をはじめ、<ruby>社員<rt>しゃいん</rt></ruby><ruby>全員<rt>ぜんいん</rt></ruby>がボランティアに<ruby>参加<rt>さんか</rt></ruby>した。", cn:"以社长为首，全体员工都参加了志愿活动。"}
      ],
      keyPoint: "列举最具代表性的一个，暗示同类还有很多 🌟",
      confusion: "vs を中心に：をはじめ=代表性列举，を中心に=以…为核心",
      comparison: {pair:"をはじめ vs を中心に", rows:[["代表性列举","以…为核心"],["東京をはじめ大都市","駅を中心に商店街"],["以东京为首（还有其他）","以车站为中心（向外扩展）"]]}
    },
    {
      name: "〜を中心に（して）",
      meaning: "以…为中心",
      structure: "名詞＋を中心に（して）",
      examples: [
        {jp:"<ruby>駅<rt>えき</rt></ruby>を<ruby>中心<rt>ちゅうしん</rt></ruby>に<ruby>商店<rt>しょうてん</rt></ruby><ruby>街<rt>がい</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>がっている。", cn:"以车站为中心商店街扩展开来。"},
        {jp:"<ruby>若者<rt>わかもの</rt></ruby>を<ruby>中心<rt>ちゅうしん</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しいファッションが<ruby>流行<rt>りゅうこう</rt></ruby>している。", cn:"以年轻人为中心流行新时尚。"}
      ],
      keyPoint: "核心点/中心群体，向外扩展 🎯",
      confusion: "vs をはじめ：を中心に强调核心地位，をはじめ强调代表性列举",
      comparison: {pair:"を中心に vs をめぐって", rows:[["以…为核心","围绕…（争论）"],["駅を中心に発展","土地をめぐって争う"],["以车站为中心发展","围绕土地争夺"]]}
    },
    {
      name: "〜をきっかけに（して）",
      meaning: "以…为契机/开端",
      structure: "名詞＋をきっかけに（して）",
      examples: [
        {jp:"<ruby>留学<rt>りゅうがく</rt></ruby>をきっかけに<ruby>日本<rt>にほん</rt></ruby>の<ruby>文化<rt>ぶんか</rt></ruby>に<ruby>興味<rt>きょうみ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つようになった。", cn:"以留学为契机开始对日本文化感兴趣。"},
        {jp:"<ruby>地震<rt>じしん</rt></ruby>をきっかけに<ruby>防災<rt>ぼうさい</rt></ruby><ruby>意識<rt>いしき</rt></ruby>が<ruby>高<rt>たか</rt></ruby>まった。", cn:"以地震为契机防灾意识提高了。"}
      ],
      keyPoint: "某个事件引发了后续变化，起因/触发点 💡",
      confusion: "vs を通じて：をきっかけに=引发变化的事件，を通じて=通过的手段",
      comparison: {pair:"をきっかけに vs を通じて", rows:[["引发变化的契机","通过的手段/媒介"],["地震をきっかけに","ネットを通じて"],["以地震为契机","通过网络"]]}
    },
    {
      name: "〜を問わず",
      meaning: "不论…/不问…",
      structure: "名詞＋を問わず",
      examples: [
        {jp:"<ruby>年齢<rt>ねんれい</rt></ruby>・<ruby>性別<rt>せいべつ</rt></ruby>を<ruby>問<rt>と</rt></ruby>わず、<ruby>誰<rt>だれ</rt></ruby>でも<ruby>参加<rt>さんか</rt></ruby>できる。", cn:"不论年龄性别谁都能参加。"},
        {jp:"<ruby>経験<rt>けいけん</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>を<ruby>問<rt>と</rt></ruby>わず<ruby>応募<rt>おうぼ</rt></ruby>できる。", cn:"不论有无经验都可应聘。"}
      ],
      keyPoint: "常搭配：国籍・男女・内外・有無 ❓",
      confusion: "vs に限らず：を問わず=不论（更正式），に限らず=不仅限于",
      comparison: {pair:"を問わず vs に限らず", rows:[["不论/不问","不仅限于"],["性別を問わず","休日に限らず"],["不论性别","不仅限于休息日"],["条件无关","范围扩展"]]}
    }
  ],
  questions: [
    {q:"<ruby>東京<rt>とうきょう</rt></ruby>＿＿＿、<ruby>日本<rt>にほん</rt></ruby>の<ruby>大都市<rt>だいとし</rt></ruby>は<ruby>物価<rt>ぶっか</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い。", options:["をはじめ","を中心に","をきっかけに","を問わず"], answer:0, grammar:"をはじめ", explanation:"以东京为首的大城市物价高，列举代表性例子用「をはじめ」。"},
    {q:"<ruby>駅<rt>えき</rt></ruby>＿＿＿<ruby>新<rt>あたら</rt></ruby>しいビルが<ruby>次々<rt>つぎつぎ</rt></ruby>と<ruby>建<rt>た</rt></ruby>てられている。", options:["をはじめ","を中心に","をきっかけに","を問わず"], answer:1, grammar:"を中心に", explanation:"以车站为中心建起新大楼，中心点用「を中心に」。"},
    {q:"<ruby>病気<rt>びょうき</rt></ruby>＿＿＿<ruby>健康<rt>けんこう</rt></ruby>について<ruby>考<rt>かんが</rt></ruby>えるようになった。", options:["をはじめ","を中心に","をきっかけに","を問わず"], answer:2, grammar:"をきっかけに", explanation:"以生病为契机开始关注健康，触发变化的事件用「をきっかけに」。"},
    {q:"<ruby>経験<rt>けいけん</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>＿＿＿<ruby>応募<rt>おうぼ</rt></ruby>できます。", options:["をはじめ","を中心に","をきっかけに","を問わず"], answer:3, grammar:"を問わず", explanation:"不论有无经验都可以应聘，不限条件用「を問わず」。"},
    {q:"<ruby>社長<rt>しゃちょう</rt></ruby>＿＿＿、<ruby>社員<rt>しゃいん</rt></ruby><ruby>全員<rt>ぜんいん</rt></ruby>がボランティアに<ruby>参加<rt>さんか</rt></ruby>した。", options:["をはじめ","を中心に","をきっかけに","を問わず"], answer:0, grammar:"をはじめ", explanation:"以社长为首全员参加志愿活动，代表人物领头用「をはじめ」。"},
    {q:"<ruby>地震<rt>じしん</rt></ruby>＿＿＿、<ruby>防災<rt>ぼうさい</rt></ruby><ruby>意識<rt>いしき</rt></ruby>が<ruby>高<rt>たか</rt></ruby>まった。", options:["をはじめ","を中心に","をきっかけに","を問わず"], answer:2, grammar:"をきっかけに", explanation:"以地震为契机防灾意识提高了，事件引发变化用「をきっかけに」。"},
    {q:"この<ruby>大会<rt>たいかい</rt></ruby>は<ruby>国籍<rt>こくせき</rt></ruby>＿＿＿<ruby>参加<rt>さんか</rt></ruby>できる。", options:["をはじめ","を中心に","をきっかけに","を問わず"], answer:3, grammar:"を問わず", explanation:"不论国籍都能参加，不限条件用「を問わず」。"},
    {q:"<ruby>若者<rt>わかもの</rt></ruby>＿＿＿<ruby>新<rt>あたら</rt></ruby>しいファッションが<ruby>流行<rt>りゅうこう</rt></ruby>している。", options:["をはじめ","を中心に","をきっかけに","を問わず"], answer:1, grammar:"を中心に", explanation:"以年轻人为中心流行新时尚，中心群体用「を中心に」。"}
  ]
}

,

"Day9": {
  title: "第10課 语法（列举表达）",
  grammar: [
    {
      name: "〜というか〜というか",
      meaning: "该说是…还是说是…（难以准确描述）",
      structure: "名詞／形容詞＋というか＋名詞／形容詞＋というか",
      examples: [
        {jp:"この<ruby>部屋<rt>へや</rt></ruby>は<ruby>仕事<rt>しごと</rt></ruby><ruby>部屋<rt>べや</rt></ruby>というか<ruby>倉庫<rt>そうこ</rt></ruby>というか…", cn:"这房间该说是工作室还是仓库呢…"},
        {jp:"この<ruby>子<rt>こ</rt></ruby>は<ruby>元気<rt>げんき</rt></ruby>だというか<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>かないというか…", cn:"这孩子该说是精力充沛还是坐不住呢…"}
      ],
      keyPoint: "口语高频使用，表示犹豫不知道怎么准确描述 🤔",
      confusion: "常搭配「…」省略号，留下悬念和模糊感",
      comparison: {pair:"というか vs でも〜でも", rows:[["犹豫描述","全面列举"],["说不准是A还是B","无论A还是B都"],["元気というか落ち着かないというか","野菜でも魚でも"],["说不好是活泼还是坐不住","蔬菜鱼都"]]}
    },
    {
      name: "〜でも〜でも",
      meaning: "无论…还是…都…（口语全面列举）",
      structure: "名詞＋でも＋名詞＋でも",
      examples: [
        {jp:"<ruby>野菜<rt>やさい</rt></ruby>でも<ruby>魚<rt>さかな</rt></ruby>でも<ruby>新鮮<rt>しんせん</rt></ruby>さが<ruby>一番<rt>いちばん</rt></ruby><ruby>重要<rt>じゅうよう</rt></ruby>です。", cn:"无论蔬菜还是鱼，新鲜度最重要。"},
        {jp:"<ruby>勉強<rt>べんきょう</rt></ruby>するでも<ruby>仕事<rt>しごと</rt></ruby>するでも、<ruby>計画<rt>けいかく</rt></ruby>を<ruby>立<rt>た</rt></ruby>てるほうがいい。", cn:"无论学习还是工作，最好先做计划。"}
      ],
      keyPoint: "口语常用，名词/动词辞书形都能接 🌀",
      confusion: "vs であれ〜であれ：でも〜でも=口语，であれ〜であれ=书面正式",
      comparison: {pair:"でも〜でも vs であれ〜であれ", rows:[["口语","书面正式"],["野菜でも魚でも","論文であれ討論であれ"],["蔬菜鱼（日常）","论文讨论（正式）"]]}
    },
    {
      name: "〜であれ〜であれ",
      meaning: "无论…还是…（书面正式版的でも〜でも）",
      structure: "名詞＋であれ＋名詞＋であれ",
      examples: [
        {jp:"<ruby>論文<rt>ろんぶん</rt></ruby>であれ<ruby>討論<rt>とうろん</rt></ruby>であれ、<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>める<ruby>必要<rt>ひつよう</rt></ruby>がある。", cn:"无论写论文还是讨论，都需要收集信息。"},
        {jp:"<ruby>公的<rt>こうてき</rt></ruby>な<ruby>場<rt>ば</rt></ruby>であれ<ruby>私的<rt>してき</rt></ruby>な<ruby>場<rt>ば</rt></ruby>であれ、マナーを<ruby>守<rt>まも</rt></ruby>るべきだ。", cn:"无论公共还是私人场合都该守礼仪。"}
      ],
      keyPoint: "书面语，考试出题概率高于でも〜でも 📜",
      confusion: "vs を問わず：であれ〜であれ列举两个具体选项，を問わず泛指不限",
      comparison: {pair:"であれ〜であれ vs を問わず", rows:[["列举两个具体选项","泛指不限条件"],["論文であれ討論であれ","経験を問わず"],["论文也好讨论也好","不论经验"]]}
    },
    {
      name: "〜たり〜たりする",
      meaning: "又…又…（列举多种动作/状态）",
      structure: "動詞た形＋り＋動詞た形＋り＋する",
      examples: [
        {jp:"<ruby>泣<rt>な</rt></ruby>いたり<ruby>跳<rt>と</rt></ruby>び<ruby>上<rt>あ</rt></ruby>がったりしました。", cn:"又哭又跳了起来。"},
        {jp:"<ruby>嬉<rt>うれ</rt></ruby>しかったり<ruby>寂<rt>さび</rt></ruby>しかったり、<ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>気持<rt>きも</rt></ruby>ちだ。", cn:"又高兴又寂寞，复杂的心情。"}
      ],
      keyPoint: "N3复习升级版，形容词也能用（嬉しかったり寂しかったり）🔄",
      confusion: "注意結尾要加する：泣いたり笑ったり「する」",
      comparison: {pair:"たり〜たり vs や〜など", rows:[["列举动作/状态","列举名词"],["泣いたり笑ったり","本や雑誌など"],["又哭又笑","书和杂志等"]]}
    }
  ],
  questions: [
    {q:"この<ruby>子<rt>こ</rt></ruby>は<ruby>元気<rt>げんき</rt></ruby>だ＿＿＿<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>かない＿＿＿…", options:["というか/というか","でも/でも","であれ/であれ","たり/たり"], answer:0, grammar:"というか〜というか", explanation:"该说精力充沛还是坐不住呢，犹豫描述用「というか〜というか」。"},
    {q:"<ruby>野菜<rt>やさい</rt></ruby>＿＿＿<ruby>魚<rt>さかな</rt></ruby>＿＿＿、<ruby>新鮮<rt>しんせん</rt></ruby>さが<ruby>大切<rt>たいせつ</rt></ruby>だ。", options:["というか/というか","でも/でも","であれ/であれ","たり/たり"], answer:1, grammar:"でも〜でも", explanation:"无论蔬菜还是鱼新鲜度都重要，口语列举用「でも〜でも」。"},
    {q:"<ruby>論文<rt>ろんぶん</rt></ruby>＿＿＿<ruby>報告書<rt>ほうこくしょ</rt></ruby>＿＿＿、データの<ruby>正確<rt>せいかく</rt></ruby>さが<ruby>求<rt>もと</rt></ruby>められる。", options:["というか/というか","でも/でも","であれ/であれ","たり/たり"], answer:2, grammar:"であれ〜であれ", explanation:"无论论文还是报告书都要求数据准确，书面正式用「であれ〜であれ」。"},
    {q:"<ruby>週末<rt>しゅうまつ</rt></ruby>は<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>＿＿＿、<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>をし＿＿＿して<ruby>過<rt>す</rt></ruby>ごした。", options:["というか/というか","でも/でも","であれ/であれ","たり/たり"], answer:3, grammar:"たり〜たりする", explanation:"周末又看电影又购物，列举多种活动用「たり〜たりする」。"},
    {q:"この<ruby>料理<rt>りょうり</rt></ruby>は<ruby>甘<rt>あま</rt></ruby>い＿＿＿<ruby>辛<rt>から</rt></ruby>い＿＿＿、<ruby>不思議<rt>ふしぎ</rt></ruby>な<ruby>味<rt>あじ</rt></ruby>だ。", options:["というか/というか","でも/でも","であれ/であれ","たり/たり"], answer:0, grammar:"というか〜というか", explanation:"该说甜还是辣呢不可思议的味道，难以准确描述用「というか〜というか」。"},
    {q:"<ruby>勉強<rt>べんきょう</rt></ruby>する＿＿＿<ruby>仕事<rt>しごと</rt></ruby>する＿＿＿、<ruby>計画<rt>けいかく</rt></ruby>を<ruby>立<rt>た</rt></ruby>てるほうがいい。", options:["というか/というか","でも/でも","であれ/であれ","たり/たり"], answer:1, grammar:"でも〜でも", explanation:"无论学习还是工作最好先做计划，口语全面列举用「でも〜でも」。"},
    {q:"<ruby>嬉<rt>うれ</rt></ruby>しかっ＿＿＿<ruby>寂<rt>さび</rt></ruby>しかっ＿＿＿、<ruby>複雑<rt>ふくざつ</rt></ruby>な<ruby>気持<rt>きも</rt></ruby>ちだ。", options:["というか/というか","でも/でも","であれ/であれ","たり/たり"], answer:3, grammar:"たり〜たり", explanation:"又高兴又寂寞复杂心情，列举对比状态用「たり〜たり」。"},
    {q:"<ruby>公的<rt>こうてき</rt></ruby>な<ruby>場<rt>ば</rt></ruby>＿＿＿<ruby>私的<rt>してき</rt></ruby>な<ruby>場<rt>ば</rt></ruby>＿＿＿、マナーを<ruby>守<rt>まも</rt></ruby>るべきだ。", options:["というか/というか","でも/でも","であれ/であれ","たり/たり"], answer:2, grammar:"であれ〜であれ", explanation:"无论公共还是私人场合都该守礼仪，书面正式用「であれ〜であれ」。"}
  ]
},
"Day10": {
  title: "第11課 语法（不问·不顾·暂且不提）",
  grammar: [
    {
      name: "〜を<ruby>問<rt>と</rt></ruby>わず",
      meaning: "不问/不论…（不受某条件限制）",
      structure: "名詞＋を問わず",
      examples: [
        {jp:"この<ruby>犬<rt>いぬ</rt></ruby><ruby>展<rt>てん</rt></ruby>では<ruby>品種<rt>ひんしゅ</rt></ruby>を<ruby>問<rt>と</rt></ruby>わず、どんな<ruby>犬<rt>いぬ</rt></ruby>でも<ruby>参加<rt>さんか</rt></ruby>できます。", cn:"这个狗展不论品种，任何狗都能参加。"},
        {jp:"マラソン<ruby>大会<rt>たいかい</rt></ruby>には<ruby>性別<rt>せいべつ</rt></ruby><ruby>年齢<rt>ねんれい</rt></ruby>を<ruby>問<rt>と</rt></ruby>わず、<ruby>誰<rt>だれ</rt></ruby>でも<ruby>参加<rt>さんか</rt></ruby>できます。", cn:"马拉松比赛不论性别年龄，任何人都可参加。"}
      ],
      keyPoint: "「問わず」是「問う」的否定书面体。常搭配：国籍、内外、男女、有無 🏃"
    },
    {
      name: "〜に<ruby>関<rt>かか</rt></ruby>わりなく",
      meaning: "与…无关（不受某因素影响）",
      structure: "名詞＋に関わりなく",
      examples: [
        {jp:"<ruby>路線<rt>ろせん</rt></ruby>バスの<ruby>料金<rt>りょうきん</rt></ruby>は<ruby>乗<rt>の</rt></ruby>った<ruby>距離<rt>きょり</rt></ruby>に<ruby>関<rt>かか</rt></ruby>わりなく<ruby>一律<rt>いちりつ</rt></ruby>200<ruby>円<rt>えん</rt></ruby>です。", cn:"公交车费与乘坐距离无关，统一200日元。"},
        {jp:"<ruby>送金<rt>そうきん</rt></ruby><ruby>手数料<rt>てすうりょう</rt></ruby>は<ruby>送金<rt>そうきん</rt></ruby><ruby>金額<rt>きんがく</rt></ruby>に<ruby>関<rt>かか</rt></ruby>わりなく<ruby>無料<rt>むりょう</rt></ruby>です。", cn:"汇款手续费与汇款金额无关，免费。"}
      ],
      keyPoint: "注意区分：に関わりなく=与…无关 vs にも関わらず=尽管…（转折）⚠️"
    },
    {
      name: "〜も<ruby>構<rt>かま</rt></ruby>わず",
      meaning: "不顾…（无视某种情况或他人感受）",
      structure: "名詞＋も構わず",
      examples: [
        {jp:"<ruby>他人<rt>たにん</rt></ruby>の<ruby>目<rt>め</rt></ruby>も<ruby>構<rt>かま</rt></ruby>わず<ruby>道<rt>みち</rt></ruby>で<ruby>大泣<rt>おおな</rt></ruby>きしている<ruby>人<rt>ひと</rt></ruby>を<ruby>見<rt>み</rt></ruby>かけた。", cn:"看到一个不顾他人目光在路边大哭的人。"},
        {jp:"<ruby>彼<rt>かれ</rt></ruby>は<ruby>値段<rt>ねだん</rt></ruby>も<ruby>構<rt>かま</rt></ruby>わず<ruby>好<rt>す</rt></ruby>きな<ruby>料理<rt>りょうり</rt></ruby>をどんどん<ruby>注文<rt>ちゅうもん</rt></ruby>した。", cn:"他不顾价格，不停地点喜欢的菜。"}
      ],
      keyPoint: "「構う」=介意/顾及。常搭配：他人の目、値段、状況 😤"
    },
    {
      name: "〜はともかく／〜はさておき",
      meaning: "…暂且不提（先搁置某问题）",
      structure: "名詞＋はともかく／はさておき",
      examples: [
        {jp:"この<ruby>店<rt>みせ</rt></ruby>は<ruby>雰囲気<rt>ふんいき</rt></ruby>はともかく、<ruby>料理<rt>りょうり</rt></ruby>の<ruby>味<rt>あじ</rt></ruby>は<ruby>最高<rt>さいこう</rt></ruby>だ。", cn:"这家店氛围暂且不论，菜品味道非常好。"},
        {jp:"<ruby>飲<rt>の</rt></ruby>み<ruby>会<rt>かい</rt></ruby>の<ruby>細<rt>こま</rt></ruby>かいことはさておき、まず<ruby>場所<rt>ばしょ</rt></ruby>と<ruby>時間<rt>じかん</rt></ruby>を<ruby>決<rt>き</rt></ruby>めよう。", cn:"聚会的细节暂且不提，先决定地点和时间吧。"}
      ],
      keyPoint: "两者意思基本相同，「さておき」更书面化。考试不需区分 📌"
    }
  ],
  questions: [
    {q:"マラソン<ruby>大会<rt>たいかい</rt></ruby>には<ruby>性別<rt>せいべつ</rt></ruby><ruby>年齢<rt>ねんれい</rt></ruby>＿＿＿、<ruby>誰<rt>だれ</rt></ruby>でも<ruby>参加<rt>さんか</rt></ruby>できます。", options:["も構わず","に関わりなく","を問わず","はともかく"], answer:2, grammar:"を問わず", explanation:"不论性别年龄任何人都可参加，不受条件限制用「を問わず」。"},
    {q:"<ruby>路線<rt>ろせん</rt></ruby>バスの<ruby>料金<rt>りょうきん</rt></ruby>は<ruby>乗<rt>の</rt></ruby>った<ruby>距離<rt>きょり</rt></ruby>＿＿＿<ruby>一律<rt>いちりつ</rt></ruby>200<ruby>円<rt>えん</rt></ruby>です。", options:["を問わず","も構わず","に関わりなく","はともかく"], answer:2, grammar:"に関わりなく", explanation:"票价与距离无关，表示不受某因素影响用「に関わりなく」。"},
    {q:"<ruby>他人<rt>たにん</rt></ruby>の<ruby>目<rt>め</rt></ruby>＿＿＿<ruby>道<rt>みち</rt></ruby>で<ruby>大声<rt>おおごえ</rt></ruby>で<ruby>泣<rt>な</rt></ruby>いていた。", options:["を問わず","に関わりなく","はともかく","も構わず"], answer:3, grammar:"も構わず", explanation:"不顾他人的目光在路上大哭，无视他人感受用「も構わず」。"},
    {q:"<ruby>雰囲気<rt>ふんいき</rt></ruby>＿＿＿、<ruby>料理<rt>りょうり</rt></ruby>の<ruby>味<rt>あじ</rt></ruby>は<ruby>最高<rt>さいこう</rt></ruby>だ。", options:["も構わず","を問わず","に関わりなく","はともかく"], answer:3, grammar:"はともかく", explanation:"氛围暂且不论，先评价味道，搁置某话题用「はともかく」。"},
    {q:"このアルバイトは<ruby>経験<rt>けいけん</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>＿＿＿<ruby>応募<rt>おうぼ</rt></ruby>できる。", options:["も構わず","を問わず","はさておき","に関わりなく"], answer:1, grammar:"を問わず", explanation:"不论有无经验都可应聘，不受条件限制用「を問わず」。"},
    {q:"<ruby>彼<rt>かれ</rt></ruby>は<ruby>値段<rt>ねだん</rt></ruby>＿＿＿<ruby>好<rt>す</rt></ruby>きなものをどんどん<ruby>注文<rt>ちゅうもん</rt></ruby>した。", options:["を問わず","はともかく","も構わず","に関わりなく"], answer:2, grammar:"も構わず", explanation:"不顾价格不停点菜，无视价格因素用「も構わず」。"},
    {q:"<ruby>細<rt>こま</rt></ruby>かいこと＿＿＿、まず<ruby>日程<rt>にってい</rt></ruby>を<ruby>決<rt>き</rt></ruby>めましょう。", options:["を問わず","も構わず","に関わりなく","はさておき"], answer:3, grammar:"はさておき", explanation:"细节暂且不提先定日程，搁置某话题用「はさておき」。"},
    {q:"<ruby>天候<rt>てんこう</rt></ruby>＿＿＿<ruby>開催<rt>かいさい</rt></ruby>します。", options:["はともかく","も構わず","に関わりなく","を問わず"], answer:2, grammar:"に関わりなく", explanation:"与天气无关都会举办，不受某因素影响用「に関わりなく」。"}
  ]
},

"Day11": {
  title: "第12課 语法（否定表达体系）",
  grammar: [
    {
      name: "〜わけがない",
      meaning: "绝对不可能（完全否定）",
      structure: "動詞／形容詞<ruby>普通形<rt>ふつうけい</rt></ruby>＋わけがない",
      examples: [
        {jp:"<ruby>田中<rt>たなか</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の<ruby>試験<rt>しけん</rt></ruby>がそんなに<ruby>簡単<rt>かんたん</rt></ruby>なわけがない。", cn:"田中老师的考试不可能那么简单。"},
        {jp:"<ruby>一人<rt>ひとり</rt></ruby>でできるわけがありません。", cn:"一个人绝对做不完。"}
      ],
      keyPoint: "基于客观事实的必然性否定。口语可简化为「わけない」🚫"
    },
    {
      name: "〜わけではない",
      meaning: "并非/并不是（部分否定）",
      structure: "動詞／形容詞<ruby>普通形<rt>ふつうけい</rt></ruby>＋わけではない",
      examples: [
        {jp:"<ruby>電話<rt>でんわ</rt></ruby>に<ruby>出<rt>で</rt></ruby>られるわけではない。", cn:"并非随时能接电话。"},
        {jp:"<ruby>彼<rt>かれ</rt></ruby>が<ruby>嫌<rt>きら</rt></ruby>いなわけではない。", cn:"并不是讨厌他。"}
      ],
      keyPoint: "隐含例外情况的委婉否定。不可省略「で」⚖️"
    },
    {
      name: "〜どころではない",
      meaning: "远非/岂止/哪顾得上（程度否定）",
      structure: "名詞／動詞<ruby>辞書形<rt>じしょけい</rt></ruby>＋どころではない",
      examples: [
        {jp:"ただの<ruby>風邪<rt>かぜ</rt></ruby>どころではなく、<ruby>肺炎<rt>はいえん</rt></ruby>だ。", cn:"不只是感冒，而是肺炎。"},
        {jp:"<ruby>休日<rt>きゅうじつ</rt></ruby>の<ruby>道<rt>みち</rt></ruby>はちょっと<ruby>混<rt>こ</rt></ruby>むどころではなかった。", cn:"休息日的道路岂止有点堵。"}
      ],
      keyPoint: "否定前文提及的程度，暗示实际情况更严重/更忙 😱"
    },
    {
      name: "〜ものか",
      meaning: "怎么可能（口语强烈否定）",
      structure: "動詞<ruby>普通形<rt>ふつうけい</rt></ruby>＋ものか",
      examples: [
        {jp:"<ruby>山田<rt>やまだ</rt></ruby>さんが<ruby>時間<rt>じかん</rt></ruby><ruby>通<rt>どお</rt></ruby>りに<ruby>来<rt>く</rt></ruby>るものか。", cn:"山田怎么可能按时来。"},
        {jp:"こんな<ruby>不便<rt>ふべん</rt></ruby>なところに<ruby>住<rt>す</rt></ruby>めるものか。", cn:"这么不方便的地方怎么可能住。"}
      ],
      keyPoint: "带有轻蔑或强烈怀疑语气。女性常用「もんか」😏"
    }
  ],
  questions: [
    {q:"<ruby>田中<rt>たなか</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の<ruby>試験<rt>しけん</rt></ruby>がそんなに<ruby>簡単<rt>かんたん</rt></ruby>な＿＿＿。", options:["わけではない","わけがない","どころではない","ものか"], answer:1, grammar:"わけがない", explanation:"田中老师的考试不可能那么简单，基于客观事实的完全否定用「わけがない」。"},
    {q:"<ruby>電話<rt>でんわ</rt></ruby>にいつでも<ruby>出<rt>で</rt></ruby>られる＿＿＿。<ruby>忙<rt>いそが</rt></ruby>しい<ruby>時<rt>とき</rt></ruby>もある。", options:["わけがない","ものか","どころではない","わけではない"], answer:3, grammar:"わけではない", explanation:"并非随时能接电话，有时忙，隐含例外的部分否定用「わけではない」。"},
    {q:"ただの<ruby>風邪<rt>かぜ</rt></ruby>＿＿＿、<ruby>肺炎<rt>はいえん</rt></ruby>だった。", options:["わけがなく","わけではなく","どころではなく","ものか"], answer:2, grammar:"どころではない", explanation:"不只是感冒而是肺炎，否定前文提及的轻微程度用「どころではない」。"},
    {q:"あの<ruby>人<rt>ひと</rt></ruby>が<ruby>正直<rt>しょうじき</rt></ruby>な＿＿＿。", options:["わけではない","わけがない","どころではない","もんか"], answer:3, grammar:"ものか", explanation:"那种人怎么可能正直，口语中强烈怀疑的否定用「もんか」（ものか的口语形式）。"},
    {q:"<ruby>料理<rt>りょうり</rt></ruby>が<ruby>嫌<rt>きら</rt></ruby>いな＿＿＿が、<ruby>毎日<rt>まいにち</rt></ruby>は<ruby>大変<rt>たいへん</rt></ruby>だ。", options:["わけがない","どころではない","わけではない","ものか"], answer:2, grammar:"わけではない", explanation:"并不是讨厌做饭，但每天做很辛苦。委婉的部分否定用「わけではない」。"},
    {q:"<ruby>試験<rt>しけん</rt></ruby><ruby>前<rt>まえ</rt></ruby>で<ruby>遊<rt>あそ</rt></ruby>ぶ＿＿＿。", options:["わけではない","わけがない","ものか","どころではない"], answer:3, grammar:"どころではない", explanation:"考试前哪顾得上玩，表示忙得没有余裕用「どころではない」。"},
    {q:"こんな<ruby>難<rt>むずか</rt></ruby>しい<ruby>問題<rt>もんだい</rt></ruby>、<ruby>子供<rt>こども</rt></ruby>にできる＿＿＿。", options:["わけではない","どころではない","ものか","わけがない"], answer:3, grammar:"わけがない", explanation:"这么难的题小孩子绝对不可能做出来，逻辑上的完全否定用「わけがない」。"},
    {q:"<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>だからといって、<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>分<rt>わ</rt></ruby>かる＿＿＿。", options:["わけがない","ものか","どころではない","わけではない"], answer:3, grammar:"わけではない", explanation:"日语好不代表全都懂，部分否定用「わけではない」。"}
  ]
},

"Day12": {
  title: "第13課 语法（解释说明·话题联想）",
  grammar: [
    {
      name: "〜とは",
      meaning: "所谓的…是…（定义性解释）",
      structure: "名詞＋とは",
      examples: [
        {jp:"<ruby>公正<rt>こうせい</rt></ruby>とはどういう<ruby>意味<rt>いみ</rt></ruby>ですか？", cn:"所谓的公正是什么意思？"},
        {jp:"<ruby>人生<rt>じんせい</rt></ruby>とは<ruby>本人<rt>ほんにん</rt></ruby>が<ruby>主役<rt>しゅやく</rt></ruby>のドラマみたいなものだ。", cn:"所谓人生就像自己主演的电视剧。"}
      ],
      keyPoint: "正式的定义性表达，多用于学术/专业场景 📖"
    },
    {
      name: "〜といえば",
      meaning: "说到…就想到…（话题联想）",
      structure: "名詞／<ruby>短<rt>たん</rt></ruby><ruby>文<rt>ぶん</rt></ruby>＋といえば",
      examples: [
        {jp:"ハワイといえば、<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>結婚式<rt>けっこんしき</rt></ruby>をするそうです。", cn:"说到夏威夷，听说佐藤要在那里结婚。"},
        {jp:"<ruby>日本料理<rt>にほんりょうり</rt></ruby>といえば、<ruby>寿司<rt>すし</rt></ruby>が<ruby>有名<rt>ゆうめい</rt></ruby>ですね。", cn:"说到日本料理，寿司很有名呢。"}
      ],
      keyPoint: "由A自然联想到相关话题，前后存在隐性关联 💭"
    },
    {
      name: "〜のこととなると",
      meaning: "一提到…就…（态度转变）",
      structure: "名詞＋のこととなると",
      examples: [
        {jp:"<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>好<rt>す</rt></ruby>きな<ruby>歌手<rt>かしゅ</rt></ruby>のこととなると、<ruby>話<rt>はなし</rt></ruby>が<ruby>止<rt>と</rt></ruby>まらない。", cn:"一说到喜欢的歌手，佐藤就说个不停。"},
        {jp:"<ruby>酒<rt>さけ</rt></ruby>となると、<ruby>人<rt>ひと</rt></ruby>が<ruby>変<rt>か</rt></ruby>わったように<ruby>元気<rt>げんき</rt></ruby>になる。", cn:"一提到酒，整个人就变得特别精神。"}
      ],
      keyPoint: "强调平时不这样，唯独在某话题上表现特殊 🔥"
    },
    {
      name: "〜と<ruby>言<rt>い</rt></ruby>ったら",
      meaning: "要说…的话（极端程度表达）",
      structure: "名詞＋と言ったら",
      examples: [
        {jp:"<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>り<ruby>前<rt>まえ</rt></ruby>の<ruby>忙<rt>いそが</rt></ruby>しさと<ruby>言<rt>い</rt></ruby>ったら、<ruby>君<rt>きみ</rt></ruby>には<ruby>想像<rt>そうぞう</rt></ruby>もできない。", cn:"截止日前的忙碌程度，你根本无法想象。"},
        {jp:"<ruby>富士山<rt>ふじさん</rt></ruby>の<ruby>景色<rt>けしき</rt></ruby>と<ruby>言<rt>い</rt></ruby>ったら、<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>すだけで<ruby>感動<rt>かんどう</rt></ruby>する。", cn:"富士山的景色，光是回想就令人感动。"}
      ],
      keyPoint: "表示事物达到令人惊讶的极限程度，常搭配「想像もできない」🏔️"
    }
  ],
  questions: [
    {q:"「<ruby>公正<rt>こうせい</rt></ruby>」＿＿＿どういう<ruby>意味<rt>いみ</rt></ruby>ですか？", options:["といえば","と言ったら","とは","のこととなると"], answer:2, grammar:"とは", explanation:"问一个概念的定义，用「とは」。"},
    {q:"<ruby>日本<rt>にほん</rt></ruby>＿＿＿、<ruby>桜<rt>さくら</rt></ruby>が<ruby>有名<rt>ゆうめい</rt></ruby>ですね。", options:["とは","と言ったら","のこととなると","といえば"], answer:3, grammar:"といえば", explanation:"说到日本就联想到樱花，话题联想用「といえば」。"},
    {q:"<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>猫<rt>ねこ</rt></ruby>＿＿＿、<ruby>急<rt>きゅう</rt></ruby>に<ruby>優<rt>やさ</rt></ruby>しくなる。", options:["とは","といえば","のこととなると","と言ったら"], answer:2, grammar:"のこととなると", explanation:"一提到猫就变温柔，平时不这样唯独在猫的话题上态度改变用「のこととなると」。"},
    {q:"あの<ruby>店<rt>みせ</rt></ruby>の<ruby>混<rt>こ</rt></ruby>み<ruby>具合<rt>ぐあい</rt></ruby>＿＿＿、1<ruby>時間<rt>じかん</rt></ruby><ruby>待<rt>ま</rt></ruby>ちは<ruby>当<rt>あ</rt></ruby>たり<ruby>前<rt>まえ</rt></ruby>だ。", options:["とは","といえば","のこととなると","と言ったら"], answer:3, grammar:"と言ったら", explanation:"要说那家店的拥挤程度，等1小时很正常。极端程度表达用「と言ったら」。"},
    {q:"<ruby>人生<rt>じんせい</rt></ruby>＿＿＿<ruby>自分<rt>じぶん</rt></ruby>が<ruby>主役<rt>しゅやく</rt></ruby>のドラマみたいなものだ。", options:["といえば","と言ったら","のこととなると","とは"], answer:3, grammar:"とは", explanation:"定义人生是什么，用「とは」。"},
    {q:"<ruby>温泉<rt>おんせん</rt></ruby>＿＿＿、<ruby>箱根<rt>はこね</rt></ruby>が<ruby>人気<rt>にんき</rt></ruby>ですよ。", options:["とは","と言ったら","のこととなると","といえば"], answer:3, grammar:"といえば", explanation:"说到温泉就联想到箱根，话题联想用「といえば」。"},
    {q:"<ruby>彼<rt>かれ</rt></ruby>は<ruby>普段<rt>ふだん</rt></ruby>おとなしいが、サッカー＿＿＿<ruby>別人<rt>べつじん</rt></ruby>のようになる。", options:["とは","といえば","のこととなると","と言ったら"], answer:2, grammar:"のこととなると", explanation:"平时安静但一提到足球就像变了个人，态度转变用「のこととなると」。"},
    {q:"<ruby>夏<rt>なつ</rt></ruby>の<ruby>暑<rt>あつ</rt></ruby>さ＿＿＿、<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>で</rt></ruby>る<ruby>気<rt>き</rt></ruby>にもなれない。", options:["とは","といえば","のこととなると","と言ったら"], answer:3, grammar:"と言ったら", explanation:"要说夏天的热度，连出门的心情都没有。极端程度表达用「と言ったら」。"}
  ]
},

"Day13": {
  title: "第14課 语法（转折表达）",
  grammar: [
    {
      name: "〜にもかかわらず",
      meaning: "尽管…仍…（不受前项影响）",
      structure: "<ruby>普通形<rt>ふつうけい</rt></ruby>＋にもかかわらず",
      examples: [
        {jp:"<ruby>天気<rt>てんき</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>いにもかかわらず、<ruby>工事<rt>こうじ</rt></ruby>は<ruby>続<rt>つづ</rt></ruby>けている。", cn:"尽管天气不好，工程仍在继续。"},
        {jp:"<ruby>足<rt>あし</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>いにもかかわらず、マラソンを<ruby>完走<rt>かんそう</rt></ruby>した。", cn:"尽管脚疼，还是跑完了马拉松。"}
      ],
      keyPoint: "N2高频转折语法，语气正式。注意「も」不可省略 💪"
    },
    {
      name: "〜ものの／〜とはいえ",
      meaning: "虽然…但是…（转折）",
      structure: "<ruby>普通形<rt>ふつうけい</rt></ruby>＋ものの／とはいえ",
      examples: [
        {jp:"<ruby>高<rt>たか</rt></ruby>い<ruby>和服<rt>わふく</rt></ruby>を<ruby>買<rt>か</rt></ruby>ったものの、<ruby>着<rt>き</rt></ruby>る<ruby>機会<rt>きかい</rt></ruby>がない。", cn:"虽然买了贵的和服，但没有机会穿。"},
        {jp:"6<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きたとはいえ、まだ<ruby>準備<rt>じゅんび</rt></ruby>ができていない。", cn:"虽说6点起床了，但还没准备好。"}
      ],
      keyPoint: "ものの后项多为消极结果；とはいえ表示与预期相反 😅"
    },
    {
      name: "〜ながら（転折）",
      meaning: "虽然…但是…（转折用法）",
      structure: "動詞マス<ruby>形<rt>けい</rt></ruby>／イ<ruby>形容詞<rt>けいようし</rt></ruby>＋ながら（も）",
      examples: [
        {jp:"<ruby>狭<rt>せま</rt></ruby>いながらも、<ruby>庭<rt>にわ</rt></ruby>がある。", cn:"虽然狭窄，但有院子。"},
        {jp:"<ruby>知<rt>し</rt></ruby>っていながら、<ruby>教<rt>おし</rt></ruby>えてくれなかった。", cn:"虽然知道，但没有告诉我。"}
      ],
      keyPoint: "注意区分「ながら」的两个意思：①一边…一边… ②虽然…但是… ⚠️"
    },
    {
      name: "せっかく〜のに／さすが〜だけあって",
      meaning: "难得…却…／不愧是…果然…",
      structure: "せっかく＋のに／さすが＋だけあって",
      examples: [
        {jp:"せっかく<ruby>来<rt>き</rt></ruby>たのに、<ruby>雨<rt>あめ</rt></ruby>で<ruby>帰<rt>かえ</rt></ruby>った。", cn:"好不容易来了，却因为下雨回去了。"},
        {jp:"さすがプロだけあって、<ruby>上手<rt>じょうず</rt></ruby>だ。", cn:"不愧是专业人士，很擅长。"}
      ],
      keyPoint: "副词与语法的固定搭配，考试高频送分题！🎯"
    }
  ],
  questions: [
    {q:"<ruby>天気<rt>てんき</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い＿＿＿、<ruby>工事<rt>こうじ</rt></ruby>は<ruby>続<rt>つづ</rt></ruby>けている。", options:["ものの","ながら","にもかかわらず","とはいえ"], answer:2, grammar:"にもかかわらず", explanation:"尽管天气不好仍继续施工，正式转折用「にもかかわらず」。"},
    {q:"<ruby>高<rt>たか</rt></ruby>い<ruby>和服<rt>わふく</rt></ruby>を<ruby>買<rt>か</rt></ruby>った＿＿＿、<ruby>着<rt>き</rt></ruby>る<ruby>機会<rt>きかい</rt></ruby>がない。", options:["にもかかわらず","ものの","ながら","のに"], answer:1, grammar:"ものの", explanation:"虽然买了但没机会穿，后项为消极结果用「ものの」。"},
    {q:"<ruby>狭<rt>せま</rt></ruby>い＿＿＿も、<ruby>庭<rt>にわ</rt></ruby>がある。", options:["ものの","とはいえ","ながら","にもかかわらず"], answer:2, grammar:"ながら", explanation:"虽然狭窄但有院子，形容词+ながら表转折。"},
    {q:"せっかく<ruby>作<rt>つく</rt></ruby>った＿＿＿、<ruby>誰<rt>だれ</rt></ruby>も<ruby>食<rt>た</rt></ruby>べなかった。", options:["ものの","ながら","のに","とはいえ"], answer:2, grammar:"のに", explanation:"好不容易做了却没人吃。「せっかく」固定搭配「のに」。"},
    {q:"さすが<ruby>先生<rt>せんせい</rt></ruby>＿＿＿、<ruby>説明<rt>せつめい</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かりやすい。", options:["ものの","だけあって","ながら","にもかかわらず"], answer:1, grammar:"だけあって", explanation:"不愧是老师，说明很易懂。「さすが」固定搭配「だけあって」。"},
    {q:"6<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きた＿＿＿、まだ<ruby>準備<rt>じゅんび</rt></ruby>ができていない。", options:["にもかかわらず","ものの","ながら","とはいえ"], answer:3, grammar:"とはいえ", explanation:"虽说6点起床了但还没准备好，与预期相反用「とはいえ」。"},
    {q:"<ruby>知<rt>し</rt></ruby>っていた＿＿＿、<ruby>何<rt>なに</rt></ruby>も<ruby>言<rt>い</rt></ruby>わなかった。", options:["にもかかわらず","ものの","ながら","とはいえ"], answer:0, grammar:"にもかかわらず", explanation:"尽管知道却什么都没说，正式的转折表达用「にもかかわらず」。"},
    {q:"<ruby>料理<rt>りょうり</rt></ruby>ができると<ruby>言<rt>い</rt></ruby>っても、<ruby>簡単<rt>かんたん</rt></ruby>なもの＿＿＿<ruby>作<rt>つく</rt></ruby>れない。", options:["だけ","しか","ばかり","ながら"], answer:1, grammar:"しか", explanation:"虽说会做饭，但只会做简单的。「しか…ない」表示限定。"}
  ]
},

"Day14": {
  title: "第15課 语法（假设表达体系）",
  grammar: [
    {
      name: "〜たら／〜ば／〜と の<ruby>使<rt>つか</rt></ruby>い<ruby>分<rt>わ</rt></ruby>け",
      meaning: "假设表达三巨头的区别",
      structure: "動詞た形＋ら／動詞仮定形＋ば／動詞辞書形＋と",
      examples: [
        {jp:"<ruby>天気<rt>てんき</rt></ruby>がよかったら、<ruby>散歩<rt>さんぽ</rt></ruby>しましょう。", cn:"天气好的话去散步吧。（たら最通用）"},
        {jp:"<ruby>春<rt>はる</rt></ruby>になると、<ruby>花<rt>はな</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>きます。", cn:"春天到了花就开。（と=自然规律）"}
      ],
      keyPoint: "たら最通用；と后面绝对禁接意志句；ば形容词/状态动词后可接意志 🔑"
    },
    {
      name: "〜ものなら（<ruby>可能形<rt>かのうけい</rt></ruby>）",
      meaning: "如果能…的话（表达愿望）",
      structure: "<ruby>可能<rt>かのう</rt></ruby>動詞<ruby>辞書形<rt>じしょけい</rt></ruby>＋ものなら",
      examples: [
        {jp:"<ruby>月<rt>つき</rt></ruby>へ<ruby>行<rt>い</rt></ruby>けるものなら、<ruby>行<rt>い</rt></ruby>きたいです。", cn:"能去月球的话想去。"},
        {jp:"<ruby>時間<rt>じかん</rt></ruby>を<ruby>戻<rt>もど</rt></ruby>せるものなら、<ruby>戻<rt>もど</rt></ruby>したい。", cn:"如果能让时间倒流的话，真想倒流。"}
      ],
      keyPoint: "可能形+ものなら → 99%后接「たい」，表示积极期待 🌙"
    },
    {
      name: "〜ものなら（<ruby>意向形<rt>いこうけい</rt></ruby>）",
      meaning: "要是…的话（会有负面后果）",
      structure: "動詞<ruby>意向形<rt>いこうけい</rt></ruby>＋ものなら",
      examples: [
        {jp:"<ruby>酒<rt>さけ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>もうものなら、<ruby>体<rt>からだ</rt></ruby>に<ruby>湿疹<rt>しっしん</rt></ruby>ができます。", cn:"一喝酒就起疹子。"},
        {jp:"<ruby>遅刻<rt>ちこく</rt></ruby>しようものなら、<ruby>先生<rt>せんせい</rt></ruby>に<ruby>怒<rt>おこ</rt></ruby>られる。", cn:"要是迟到的话会被老师骂。"}
      ],
      keyPoint: "意向形+ものなら → 后接负面结果，表消极预警 ⚡"
    },
    {
      name: "〜なしには〜ない",
      meaning: "没有…就不…（否定条件）",
      structure: "名詞＋なしには＋<ruby>否定<rt>ひてい</rt></ruby>",
      examples: [
        {jp:"ネットなしには、<ruby>現代<rt>げんだい</rt></ruby><ruby>社会<rt>しゃかい</rt></ruby>は<ruby>成立<rt>せいりつ</rt></ruby>しません。", cn:"没有网络现代社会无法成立。"},
        {jp:"<ruby>努力<rt>どりょく</rt></ruby>なしには<ruby>成功<rt>せいこう</rt></ruby>はありえない。", cn:"没有努力就不可能成功。"}
      ],
      keyPoint: "双重否定结构，后面必须接否定句 🔒"
    }
  ],
  questions: [
    {q:"<ruby>天気<rt>てんき</rt></ruby>がよかっ＿＿＿、<ruby>散歩<rt>さんぽ</rt></ruby>しましょう。", options:["と","ば","たら","なら"], answer:2, grammar:"たら", explanation:"天气好的话去散步吧，后面有意志表达「しましょう」，たら最通用可以接。"},
    {q:"<ruby>春<rt>はる</rt></ruby>になる＿＿＿、<ruby>花<rt>はな</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>きます。", options:["たら","ば","と","なら"], answer:2, grammar:"と", explanation:"春天到了花就开，自然规律用「と」。"},
    {q:"<ruby>月<rt>つき</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ける＿＿＿、<ruby>行<rt>い</rt></ruby>きたいです。", options:["と","ものなら","ば","たら"], answer:1, grammar:"ものなら", explanation:"能去月球的话想去，可能形+ものなら表达愿望。"},
    {q:"<ruby>遅刻<rt>ちこく</rt></ruby>しよう＿＿＿、<ruby>先生<rt>せんせい</rt></ruby>に<ruby>怒<rt>おこ</rt></ruby>られる。", options:["たら","ものなら","ば","と"], answer:1, grammar:"ものなら", explanation:"要是迟到的话会被骂，意向形+ものなら表消极预警。"},
    {q:"ネット＿＿＿<ruby>現代<rt>げんだい</rt></ruby><ruby>社会<rt>しゃかい</rt></ruby>は<ruby>成立<rt>せいりつ</rt></ruby>しません。", options:["がないと","なしには","がなければ","ものなら"], answer:1, grammar:"なしには", explanation:"没有网络现代社会无法成立，名词+なしには+否定。"},
    {q:"お<ruby>金<rt>かね</rt></ruby>があれ＿＿＿、<ruby>旅行<rt>りょこう</rt></ruby>したい。", options:["ば","と","たら","なら"], answer:0, grammar:"ば", explanation:"有钱的话想去旅行，「ある」是状态动词，BA形后面可以接意志句。"},
    {q:"<ruby>試<rt>ため</rt></ruby>さない＿＿＿、<ruby>分<rt>わ</rt></ruby>かりません。", options:["ば","たら","と","なら"], answer:2, grammar:"と", explanation:"不尝试就不知道，否定条件+必然结果用「と」。"},
    {q:"<ruby>時間<rt>じかん</rt></ruby>を<ruby>戻<rt>もど</rt></ruby>せる＿＿＿、やり<ruby>直<rt>なお</rt></ruby>したい。", options:["と","たら","ものなら","ば"], answer:2, grammar:"ものなら", explanation:"如果能让时间倒流就想重来，可能形+ものなら表达愿望。"}
  ]
},

"Day15": {
  title: "第16課 语法（原因表达体系）",
  grammar: [
    {
      name: "〜による／〜によって",
      meaning: "由于…（正式书面原因表达）",
      structure: "名詞＋による／によって",
      examples: [
        {jp:"<ruby>事故<rt>じこ</rt></ruby>によってダイヤが<ruby>乱<rt>みだ</rt></ruby>れた。", cn:"因事故导致列车时刻表混乱。"},
        {jp:"<ruby>台風<rt>たいふう</rt></ruby>による<ruby>被害<rt>ひがい</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>がっている。", cn:"台风造成的灾害正在扩大。"}
      ],
      keyPoint: "多用于新闻、报告。修饰名词时用「による」，句中用「によって」📰"
    },
    {
      name: "〜ものだから／〜もので",
      meaning: "因为…所以…（口语辩解）",
      structure: "<ruby>簡体<rt>かんたい</rt></ruby><ruby>句<rt>ぶん</rt></ruby>＋ものだから／もので",
      examples: [
        {jp:"<ruby>熱<rt>ねつ</rt></ruby>があったものだから<ruby>休<rt>やす</rt></ruby>んだ。", cn:"因为发烧了所以请假了。"},
        {jp:"<ruby>忙<rt>いそが</rt></ruby>しかったもので<ruby>返事<rt>へんじ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れた。", cn:"因为忙所以回复晚了。"}
      ],
      keyPoint: "带有辩解、撒娇语气。口语中「もの」可简化为「もん」😅"
    },
    {
      name: "〜おかげで／〜せいで",
      meaning: "多亏…／都怪…（情感色彩原因）",
      structure: "名詞＋の／<ruby>用言<rt>ようげん</rt></ruby><ruby>連体形<rt>れんたいけい</rt></ruby>＋おかげで／せいで",
      examples: [
        {jp:"<ruby>山川<rt>やまかわ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>のおかげで<ruby>合格<rt>ごうかく</rt></ruby>した。", cn:"多亏山川老师才通过了。"},
        {jp:"<ruby>気温<rt>きおん</rt></ruby>が<ruby>低<rt>ひく</rt></ruby>いせいで<ruby>桜<rt>さくら</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れた。", cn:"因为气温低樱花晚开了。"}
      ],
      keyPoint: "おかげで=积极感谢 vs せいで=消极抱怨。情感色彩完全相反！🎭"
    },
    {
      name: "〜あまり",
      meaning: "因过度…而导致…",
      structure: "<ruby>感情<rt>かんじょう</rt></ruby>名詞＋の＋あまり／動詞<ruby>連体形<rt>れんたいけい</rt></ruby>＋あまり",
      examples: [
        {jp:"<ruby>緊張<rt>きんちょう</rt></ruby>のあまり<ruby>頭<rt>あたま</rt></ruby>が<ruby>真<rt>ま</rt></ruby>っ<ruby>白<rt>しろ</rt></ruby>になった。", cn:"因为过度紧张脑子一片空白。"},
        {jp:"<ruby>急<rt>いそ</rt></ruby>いだあまりミスをした。", cn:"因为太着急犯了错。"}
      ],
      keyPoint: "后接非意志性极端结果，如泣いた、ミスをした、頭が真っ白 😵"
    }
  ],
  questions: [
    {q:"<ruby>事故<rt>じこ</rt></ruby>＿＿＿ダイヤが<ruby>乱<rt>みだ</rt></ruby>れた。", options:["のせいで","のおかげで","によって","のあまり"], answer:2, grammar:"によって", explanation:"因事故导致时刻表混乱，正式场合客观原因用「によって」。"},
    {q:"<ruby>熱<rt>ねつ</rt></ruby>があった＿＿＿<ruby>休<rt>やす</rt></ruby>んだ。", options:["によって","ものだから","おかげで","あまり"], answer:1, grammar:"ものだから", explanation:"因为发烧所以请假了，带辩解语气的口语原因用「ものだから」。"},
    {q:"<ruby>山川<rt>やまかわ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の＿＿＿<ruby>合格<rt>ごうかく</rt></ruby>した。", options:["せいで","あまり","によって","おかげで"], answer:3, grammar:"おかげで", explanation:"多亏老师才通过考试，积极感谢用「おかげで」。"},
    {q:"<ruby>緊張<rt>きんちょう</rt></ruby>の＿＿＿<ruby>頭<rt>あたま</rt></ruby>が<ruby>真<rt>ま</rt></ruby>っ<ruby>白<rt>しろ</rt></ruby>になった。", options:["せいで","おかげで","によって","あまり"], answer:3, grammar:"あまり", explanation:"因过度紧张脑子一片空白，过度原因用「あまり」。"},
    {q:"<ruby>台風<rt>たいふう</rt></ruby>＿＿＿<ruby>被害<rt>ひがい</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>がっている。", options:["のあまり","のせいで","による","のおかげで"], answer:2, grammar:"による", explanation:"台风造成的灾害，修饰名词时用连体形「による」。"},
    {q:"<ruby>気温<rt>きおん</rt></ruby>が<ruby>低<rt>ひく</rt></ruby>い＿＿＿<ruby>桜<rt>さくら</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れた。", options:["あまり","ものだから","おかげで","せいで"], answer:3, grammar:"せいで", explanation:"因为气温低樱花晚开了，消极结果的原因用「せいで」。"},
    {q:"<ruby>忙<rt>いそが</rt></ruby>しかった＿＿＿<ruby>返事<rt>へんじ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れた。", options:["によって","あまり","もので","せいで"], answer:2, grammar:"もので", explanation:"因为忙回复晚了，带道歉辩解语气用「もので」。"},
    {q:"<ruby>悔<rt>くや</rt></ruby>しさの＿＿＿ボロボロ<ruby>泣<rt>な</rt></ruby>いた。", options:["せいで","おかげで","あまり","もので"], answer:2, grammar:"あまり", explanation:"因过度不甘心痛哭流涕，过度情感导致极端结果用「あまり」。"}
  ]
},

"Day16": {
  title: "第17課 语法（原因表达·续）",
  grammar: [
    {
      name: "〜からには",
      meaning: "既然…就…（基于既定事实的必然行动）",
      structure: "動詞<ruby>普通形<rt>ふつうけい</rt></ruby>＋からには",
      examples: [
        {jp:"<ruby>一人<rt>ひとり</rt></ruby>でやると<ruby>言<rt>い</rt></ruby>ったからには、<ruby>人<rt>ひと</rt></ruby>に<ruby>手伝<rt>てつだ</rt></ruby>ってもらえない。", cn:"既然说了要一个人做，就不能请人帮忙。"},
        {jp:"オリンピック<ruby>出場<rt>しゅつじょう</rt></ruby>を<ruby>目指<rt>めざ</rt></ruby>すからには、<ruby>中途半端<rt>ちゅうとはんぱ</rt></ruby>な<ruby>気持<rt>きも</rt></ruby>ちではだめだ。", cn:"既然目标是参加奥运会，就不能半途而废。"}
      ],
      keyPoint: "N2核心高频语法！表示既定事实→必然结论/义务 🎯"
    },
    {
      name: "〜だけに",
      meaning: "正因为…（前后有因果关联）",
      structure: "<ruby>普通形<rt>ふつうけい</rt></ruby>＋だけに",
      examples: [
        {jp:"<ruby>人気<rt>にんき</rt></ruby>のある<ruby>店<rt>みせ</rt></ruby>だけに、いつも<ruby>混<rt>こ</rt></ruby>んでいる。", cn:"正因为是人气店，所以总是很拥挤。"},
        {jp:"<ruby>期待<rt>きたい</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きかっただけに、<ruby>失望<rt>しつぼう</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きい。", cn:"正因为期望大，失望也大。"}
      ],
      keyPoint: "可接好结果也可接坏结果，前后因果关系密切 🔗"
    },
    {
      name: "〜のだから",
      meaning: "因为…（基于了解的强调说明）",
      structure: "<ruby>普通形<rt>ふつうけい</rt></ruby>＋のだから",
      examples: [
        {jp:"<ruby>太郎<rt>たろう</rt></ruby>のだから、きっと<ruby>本屋<rt>ほんや</rt></ruby>で<ruby>立<rt>た</rt></ruby>ち<ruby>読<rt>よ</rt></ruby>みしているよ。", cn:"因为是太郎嘛，他肯定在书店站着看书。"},
        {jp:"<ruby>約束<rt>やくそく</rt></ruby>したのだから、<ruby>守<rt>まも</rt></ruby>らなければならない。", cn:"既然约好了就必须遵守。"}
      ],
      keyPoint: "多接在人名后，基于对某人/某事的了解做出判断 💡"
    },
    {
      name: "〜だって（<ruby>口語<rt>こうご</rt></ruby><ruby>原因<rt>げんいん</rt></ruby>）",
      meaning: "因为…（口语化原因表达）",
      structure: "<ruby>簡体<rt>かんたい</rt></ruby><ruby>句<rt>ぶん</rt></ruby>＋だって",
      examples: [
        {jp:"<ruby>来週<rt>らいしゅう</rt></ruby><ruby>人<rt>ひと</rt></ruby>が<ruby>来<rt>く</rt></ruby>るんだって、<ruby>大掃除<rt>おおそうじ</rt></ruby>しなきゃ。", cn:"因为下周有人来，必须大扫除。"},
        {jp:"<ruby>雨<rt>あめ</rt></ruby>が<ruby>止<rt>や</rt></ruby>んだんだって、ジョギングに<ruby>行<rt>い</rt></ruby>こうか。", cn:"因为雨停了，要不要去慢跑？"}
      ],
      keyPoint: "最简单的口语原因表达，日常对话常用 🗣️"
    }
  ],
  questions: [
    {q:"<ruby>一人<rt>ひとり</rt></ruby>でやると<ruby>言<rt>い</rt></ruby>った＿＿＿、<ruby>最後<rt>さいご</rt></ruby>まで<ruby>頑張<rt>がんば</rt></ruby>らなければならない。", options:["だけに","のだから","からには","だって"], answer:2, grammar:"からには", explanation:"既然说了要一个人做就必须坚持到底，既定事实→必然义务用「からには」。"},
    {q:"<ruby>人気<rt>にんき</rt></ruby>のある<ruby>店<rt>みせ</rt></ruby>＿＿＿、いつも<ruby>混<rt>こ</rt></ruby>んでいる。", options:["からには","だって","だけに","のだから"], answer:2, grammar:"だけに", explanation:"正因为是人气店所以总是很拥挤，前后因果关联用「だけに」。"},
    {q:"<ruby>約束<rt>やくそく</rt></ruby>した＿＿＿、<ruby>守<rt>まも</rt></ruby>らなければならない。", options:["だけに","からには","だって","のだから"], answer:3, grammar:"のだから", explanation:"既然约好了就必须遵守，基于了解做出判断用「のだから」。"},
    {q:"<ruby>雨<rt>あめ</rt></ruby>が<ruby>止<rt>や</rt></ruby>んだん＿＿＿、<ruby>散歩<rt>さんぽ</rt></ruby>に<ruby>行<rt>い</rt></ruby>こう。", options:["からには","だけに","のだから","だって"], answer:3, grammar:"だって", explanation:"因为雨停了去散步吧，口语化原因表达用「だって」。"},
    {q:"<ruby>期待<rt>きたい</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きかった＿＿＿、<ruby>失望<rt>しつぼう</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きい。", options:["からには","のだから","だって","だけに"], answer:3, grammar:"だけに", explanation:"正因为期望大失望也大，前后因果关系密切用「だけに」。"},
    {q:"オリンピックに<ruby>出<rt>で</rt></ruby>る＿＿＿、<ruby>中途半端<rt>ちゅうとはんぱ</rt></ruby>ではだめだ。", options:["だけに","のだから","だって","からには"], answer:3, grammar:"からには", explanation:"既然要参加奥运就不能半途而废，既定事实→必然行动用「からには」。"},
    {q:"<ruby>太郎<rt>たろう</rt></ruby>＿＿＿、きっと<ruby>遅刻<rt>ちこく</rt></ruby>するよ。", options:["からには","だけに","のだから","だって"], answer:2, grammar:"のだから", explanation:"因为是太郎嘛肯定会迟到，基于对某人了解的判断用「のだから」。"},
    {q:"<ruby>試合<rt>しあい</rt></ruby>に<ruby>出<rt>で</rt></ruby>る＿＿＿、<ruby>全力<rt>ぜんりょく</rt></ruby>を<ruby>尽<rt>つ</rt></ruby>くすべきだ。", options:["だけに","だって","のだから","からには"], answer:3, grammar:"からには", explanation:"既然要上场比赛就应该全力以赴，既定事实→必然结论用「からには」。"}
  ]
},
"Day17": {
  title: "第18課 语法（难以/不能的表达）",
  grammar: [
    {
      name: "〜がたい",
      meaning: "难以…（心理上的困难）",
      structure: "動詞マス形＋がたい",
      examples: [
        {jp:"<ruby>優<rt>やさ</rt></ruby>しい<ruby>彼<rt>かれ</rt></ruby>がこんなひどいことをするなんて、<ruby>信<rt>しん</rt></ruby>じがたい。", cn:"温柔的他竟然做出这种过分的事，难以置信。"},
        {jp:"この<ruby>味<rt>あじ</rt></ruby>は<ruby>初<rt>はじ</rt></ruby>めてなので、<ruby>言葉<rt>ことば</rt></ruby>で<ruby>表現<rt>ひょうげん</rt></ruby>しがたい。", cn:"这味道是第一次尝到，难以用语言表达。"}
      ],
      keyPoint: "只能接心理活动动词（信じる、理解する、想像する等），不能接能力动词！🧠"
    },
    {
      name: "〜かねる",
      meaning: "难以…（委婉拒绝）",
      structure: "動詞マス形＋かねる",
      examples: [
        {jp:"メールだけでは<ruby>診断<rt>しんだん</rt></ruby>しかねますので、<ruby>来院<rt>らいいん</rt></ruby>してください。", cn:"仅靠邮件难以诊断，请您来医院。"},
        {jp:"ご<ruby>意見<rt>いけん</rt></ruby>には<ruby>賛成<rt>さんせい</rt></ruby>しかねます。", cn:"难以赞同您的意见。"}
      ],
      keyPoint: "正式场合的礼貌拒绝，形式是肯定但意思是否定！🤝"
    },
    {
      name: "〜ようがない／〜ようもない",
      meaning: "没办法…／无法…",
      structure: "動詞マス形＋ようがない",
      examples: [
        {jp:"<ruby>彼<rt>かれ</rt></ruby>の<ruby>連絡先<rt>れんらくさき</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からないので、<ruby>連絡<rt>れんらく</rt></ruby>しようがない。", cn:"不知道他的联系方式，无法联系。"},
        {jp:"<ruby>準備<rt>じゅんび</rt></ruby>が<ruby>万全<rt>ばんぜん</rt></ruby>だから、<ruby>失敗<rt>しっぱい</rt></ruby>するようがない。", cn:"准备万全，不可能失败。"}
      ],
      keyPoint: "客观上无法实现。「〜としか言いようがない」是常用套话 💬"
    },
    {
      name: "〜得る／〜得ない",
      meaning: "可能／不可能（可能性判断）",
      structure: "動詞マス形＋得る（える／うる）／得ない（えない）",
      examples: [
        {jp:"<ruby>誰<rt>だれ</rt></ruby>でもがんにかかり<ruby>得<rt>う</rt></ruby>る。", cn:"任何人都有可能患癌症。"},
        {jp:"100メートルを5<ruby>秒<rt>びょう</rt></ruby>で<ruby>走<rt>はし</rt></ruby>るのはあり<ruby>得<rt>え</rt></ruby>ない。", cn:"5秒跑完100米是不可能的。"}
      ],
      keyPoint: "肯定读「える」或「うる」，否定只读「えない」。「ありえない」超常用！⚡"
    },
    {
      name: "〜べからず",
      meaning: "不可…／禁止…（告示用语）",
      structure: "動詞辞書形＋べからず",
      examples: [
        {jp:"<ruby>芝生<rt>しばふ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>るべからず。", cn:"禁止踩踏草坪。"},
        {jp:"ここにごみを<ruby>捨<rt>す</rt></ruby>てるべからず。", cn:"禁止在此扔垃圾。"}
      ],
      keyPoint: "古语表达，现在多用于告示牌。相当于「〜てはいけない」🚫"
    }
  ],
  questions: [
    {q:"<ruby>優<rt>やさ</rt></ruby>しい<ruby>彼<rt>かれ</rt></ruby>がそんなことをするなんて、<ruby>信<rt>しん</rt></ruby>じ＿＿＿。", options:["かねる","がたい","ようがない","得ない"], answer:1, grammar:"がたい", explanation:"「信じる」是心理活动动词，表示心理上难以接受用「がたい」。"},
    {q:"メールだけでは<ruby>診断<rt>しんだん</rt></ruby>し＿＿＿ので、<ruby>来院<rt>らいいん</rt></ruby>してください。", options:["がたい","ようがない","かねます","得ない"], answer:2, grammar:"かねる", explanation:"正式场合的委婉拒绝用「かねる」，敬体为「かねます」。"},
    {q:"<ruby>連絡先<rt>れんらくさき</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からないので、<ruby>連絡<rt>れんらく</rt></ruby>し＿＿＿。", options:["がたい","かねる","ようがない","べからず"], answer:2, grammar:"ようがない", explanation:"客观上没有联系方式所以无法联系，用「ようがない」。"},
    {q:"<ruby>誰<rt>だれ</rt></ruby>でも<ruby>事故<rt>じこ</rt></ruby>に<ruby>遭<rt>あ</rt></ruby>い＿＿＿。", options:["がたい","かねる","ようがない","得る"], answer:3, grammar:"得る", explanation:"任何人都有可能遭遇事故，表示可能性用「得る」。"},
    {q:"100メートルを5<ruby>秒<rt>びょう</rt></ruby>で<ruby>走<rt>はし</rt></ruby>るのはあり＿＿＿。", options:["がたい","かねる","得ない","ようがない"], answer:2, grammar:"得ない", explanation:"5秒跑100米是不可能的，否定可能性用「得ない」（えない）。"},
    {q:"ご<ruby>提案<rt>ていあん</rt></ruby>については<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れ＿＿＿。", options:["がたい","かねます","ようがない","べからず"], answer:1, grammar:"かねる", explanation:"难以接受提案，正式场合委婉拒绝用「かねます」。"},
    {q:"<ruby>彼<rt>かれ</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>は<ruby>理解<rt>りかい</rt></ruby>し＿＿＿。", options:["かねる","がたい","得ない","ようがない"], answer:1, grammar:"がたい", explanation:"「理解する」是心理动词，难以理解用「がたい」。"},
    {q:"<ruby>芝生<rt>しばふ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>る＿＿＿。", options:["かねる","がたい","ようがない","べからず"], answer:3, grammar:"べからず", explanation:"告示牌上的禁止表达用「べからず」。"}
  ]
},

"Day18": {
  title: "第19課 语法（比较与评价表达）",
  grammar: [
    {
      name: "〜わりに（は）",
      meaning: "与…相比之下（与预期相反）",
      structure: "名詞＋の／形容詞／動詞普通形＋わりに（は）",
      examples: [
        {jp:"お<ruby>菓子<rt>かし</rt></ruby>は<ruby>値段<rt>ねだん</rt></ruby>の<ruby>割<rt>わり</rt></ruby>には<ruby>量<rt>りょう</rt></ruby>が<ruby>少<rt>すく</rt></ruby>ない。", cn:"这点心相对于价格来说量太少了。"},
        {jp:"<ruby>若<rt>わか</rt></ruby>いわりにしっかりしている。", cn:"年纪轻轻却很可靠。"}
      ],
      keyPoint: "核心是「与预期相反」！不是简单的「虽然但是」。接有幅度概念的词 📊"
    },
    {
      name: "〜にしては",
      meaning: "作为…来说（与预期相反）",
      structure: "具体数値／名詞＋にしては",
      examples: [
        {jp:"18<ruby>歳<rt>さい</rt></ruby>にしてはしっかりしている。", cn:"作为18岁来说很可靠。"},
        {jp:"<ruby>二月<rt>にがつ</rt></ruby>にしては<ruby>暖<rt>あたた</rt></ruby>かい。", cn:"对二月来说很暖和。"}
      ],
      keyPoint: "接具体数值或无幅度概念的名词。和「わりに」的区别是接续对象不同！🔢"
    },
    {
      name: "〜だけあって／さすが",
      meaning: "不愧是…（名副其实）",
      structure: "動詞普通形／名詞＋の＋だけあって",
      examples: [
        {jp:"<ruby>十年<rt>じゅうねん</rt></ruby>も<ruby>住<rt>す</rt></ruby>んでいるだけあって、<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>だ。", cn:"不愧住了十年，日语很好。"},
        {jp:"さすがオリンピック、<ruby>試合<rt>しあい</rt></ruby>が<ruby>素晴<rt>すば</rt></ruby>らしい。", cn:"不愧是奥运会，比赛精彩。"}
      ],
      keyPoint: "强调因果关系和认可。「さすが」是副词可直接修饰句子 🏅"
    },
    {
      name: "〜にとって",
      meaning: "对于…来说（立场/视角）",
      structure: "名詞＋にとって（は）",
      examples: [
        {jp:"<ruby>私<rt>わたし</rt></ruby>にとって<ruby>家族<rt>かぞく</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>大切<rt>たいせつ</rt></ruby>だ。", cn:"对我来说家人最重要。"},
        {jp:"<ruby>他人<rt>たにん</rt></ruby>にとっては<ruby>普通<rt>ふつう</rt></ruby>の<ruby>石<rt>いし</rt></ruby>だが、<ruby>私<rt>わたし</rt></ruby>にとっては<ruby>宝物<rt>たからもの</rt></ruby>だ。", cn:"对别人来说是普通的石头，对我来说是宝物。"}
      ],
      keyPoint: "强调立场/视角。vs「に対して」：に対して表示动作方向/对象 👤"
    }
  ],
  questions: [
    {q:"この<ruby>料理<rt>りょうり</rt></ruby>は<ruby>値段<rt>ねだん</rt></ruby>の＿＿＿<ruby>量<rt>りょう</rt></ruby>が<ruby>少<rt>すく</rt></ruby>ない。", options:["にしては","にとって","わりには","だけあって"], answer:2, grammar:"わりに", explanation:"价格是有幅度概念的词，与预期相反（贵但量少）用「わりに」。"},
    {q:"18<ruby>歳<rt>さい</rt></ruby>＿＿＿しっかりしている。", options:["のわりに","にしては","にとって","だけあって"], answer:1, grammar:"にしては", explanation:"18岁是具体数值，作为18岁来说很可靠，用「にしては」。"},
    {q:"<ruby>十年<rt>じゅうねん</rt></ruby>も<ruby>日本<rt>にほん</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいる＿＿＿、<ruby>日本語<rt>にほんご</rt></ruby>がペラペラだ。", options:["わりに","にしては","だけあって","にとって"], answer:2, grammar:"だけあって", explanation:"不愧住了十年，日语流利。强调因果认可用「だけあって」。"},
    {q:"<ruby>私<rt>わたし</rt></ruby>＿＿＿<ruby>家族<rt>かぞく</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>大切<rt>たいせつ</rt></ruby>だ。", options:["にしては","わりに","だけあって","にとって"], answer:3, grammar:"にとって", explanation:"对我来说，表示立场/视角用「にとって」。"},
    {q:"<ruby>二月<rt>にがつ</rt></ruby>＿＿＿<ruby>暖<rt>あたた</rt></ruby>かい。", options:["のわりに","にしては","にとっては","だけあって"], answer:1, grammar:"にしては", explanation:"二月是具体月份（无幅度），作为二月来说暖和，用「にしては」。"},
    {q:"<ruby>若<rt>わか</rt></ruby>い＿＿＿しっかりしている。", options:["にしては","わりに","だけあって","にとって"], answer:1, grammar:"わりに", explanation:"「若い」是有幅度的形容词，年轻却可靠（与预期相反）用「わりに」。"},
    {q:"＿＿＿プロの<ruby>選手<rt>せんしゅ</rt></ruby>だ、<ruby>技術<rt>ぎじゅつ</rt></ruby>が<ruby>素晴<rt>すば</rt></ruby>らしい。", options:["わりに","にしては","にとって","さすが"], answer:3, grammar:"さすが", explanation:"不愧是职业选手，技术了得。「さすが」作副词直接修饰句子。"},
    {q:"<ruby>社員<rt>しゃいん</rt></ruby>は<ruby>社長<rt>しゃちょう</rt></ruby>＿＿＿<ruby>不満<rt>ふまん</rt></ruby>を<ruby>持<rt>も</rt></ruby>っている。", options:["にとって","に対して","にしては","わりに"], answer:1, grammar:"に対して", explanation:"员工对社长有不满，动作方向/对象用「に対して」，不是「にとって」（立场）。"}
  ]
},

"Day19": {
  title: "第20課 语法（时间关系与结果状态）",
  grammar: [
    {
      name: "〜たところ",
      meaning: "…之后，结果…（引导后续结果）",
      structure: "動詞た形＋ところ",
      examples: [
        {jp:"<ruby>課長<rt>かちょう</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>したところ、2<ruby>週間<rt>しゅうかん</rt></ruby><ruby>休<rt>やす</rt></ruby>めると<ruby>言<rt>い</rt></ruby>われました。", cn:"和课长商量后，被告知可以休息两周。"},
        {jp:"<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んだところ、すぐに<ruby>熱<rt>ねつ</rt></ruby>が<ruby>下<rt>さ</rt></ruby>がった。", cn:"吃了药之后，烧很快就退了。"}
      ],
      keyPoint: "N2的「たところ」≠N4的「たところだ（刚刚完成）」，这里引导后续结果！🔄"
    },
    {
      name: "〜たきり",
      meaning: "自从…之后就再也没有…",
      structure: "動詞た形＋きり",
      examples: [
        {jp:"<ruby>子供<rt>こども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>に<ruby>読<rt>よ</rt></ruby>んだきり、この<ruby>本<rt>ほん</rt></ruby>は<ruby>一度<rt>いちど</rt></ruby>も<ruby>読<rt>よ</rt></ruby>んでいません。", cn:"自从小时候读过之后，这本书就再也没读过。"},
        {jp:"<ruby>出<rt>で</rt></ruby>かけたきり、まだ<ruby>帰<rt>かえ</rt></ruby>ってきていません。", cn:"出门之后就再也没回来。"}
      ],
      keyPoint: "强调动作完成后状态持续不变，含遗憾/不满语气 😟"
    },
    {
      name: "〜あとで vs 〜した後",
      meaning: "…之后（あとで→负面结果 / した後→决断结果）",
      structure: "動詞た形＋あとで／した後",
      examples: [
        {jp:"5<ruby>時間<rt>じかん</rt></ruby>も<ruby>討論<rt>とうろん</rt></ruby>したあとで、<ruby>結論<rt>けつろん</rt></ruby>が<ruby>出<rt>で</rt></ruby>ませんでした。", cn:"讨论了5小时后，没能得出结论。"},
        {jp:"<ruby>何度<rt>なんど</rt></ruby>も<ruby>相談<rt>そうだん</rt></ruby>した<ruby>後<rt>あと</rt></ruby>、A<ruby>案<rt>あん</rt></ruby>を<ruby>採用<rt>さいよう</rt></ruby>することに<ruby>決<rt>き</rt></ruby>めました。", cn:"多次讨论后，决定采用A方案。"}
      ],
      keyPoint: "「あとで」后接负面结果，「した後」后接决断/中性结果。考试高频考点！⚠️"
    },
    {
      name: "〜ところだった",
      meaning: "差点就…（实际未发生）",
      structure: "動詞辞書形／ない形＋ところだった",
      examples: [
        {jp:"うっかり<ruby>約束<rt>やくそく</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れるところだった。", cn:"差点忘了约定。"},
        {jp:"もう<ruby>少<rt>すこ</rt></ruby>しで<ruby>火事<rt>かじ</rt></ruby>になるところだった。", cn:"差点酿成火灾。"}
      ],
      keyPoint: "常与「うっかり」「危うく」「もう少しで」搭配。实际没发生！😰"
    },
    {
      name: "〜ずじまい",
      meaning: "最终没能…（不了了之，含遗憾）",
      structure: "動詞ない形（去ない）＋ずじまい",
      examples: [
        {jp:"<ruby>田中<rt>たなか</rt></ruby>さんの<ruby>連絡先<rt>れんらくさき</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からずじまいだった。", cn:"最终没能问到田中的联系方式。"},
        {jp:"<ruby>旅行<rt>りょこう</rt></ruby>したかったが、<ruby>忙<rt>いそが</rt></ruby>しくて<ruby>行<rt>い</rt></ruby>かずじまいで<ruby>帰国<rt>きこく</rt></ruby>した。", cn:"想去旅行但太忙，最终没能去就回国了。"}
      ],
      keyPoint: "含遗憾语气。する→せずじまい（特殊变化）📝"
    }
  ],
  questions: [
    {q:"<ruby>課長<rt>かちょう</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>した＿＿＿、<ruby>休<rt>やす</rt></ruby>みをもらえました。", options:["きり","ところ","あとで","ずじまい"], answer:1, grammar:"たところ", explanation:"商量之后得到了结果（获准休假），引导后续结果用「たところ」。"},
    {q:"<ruby>子供<rt>こども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>に<ruby>会<rt>あ</rt></ruby>った＿＿＿、もう20<ruby>年<rt>ねん</rt></ruby>も<ruby>会<rt>あ</rt></ruby>っていない。", options:["ところ","あとで","きり","ずじまい"], answer:2, grammar:"たきり", explanation:"小时候见过之后就再也没见过，状态持续不变用「たきり」。"},
    {q:"うっかり<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>り<ruby>過<rt>す</rt></ruby>ごす＿＿＿。", options:["きりだった","ところだった","ずじまいだった","あとだった"], answer:1, grammar:"ところだった", explanation:"差点坐过站（实际没坐过），用「ところだった」。搭配「うっかり」。"},
    {q:"さんざん<ruby>悩<rt>なや</rt></ruby>んだ＿＿＿、<ruby>何<rt>なに</rt></ruby>も<ruby>買<rt>か</rt></ruby>わずに<ruby>帰<rt>かえ</rt></ruby>った。", options:["ところ","きり","あとで","後"], answer:2, grammar:"あとで", explanation:"纠结半天后什么都没买（负面结果），用「あとで」。"},
    {q:"<ruby>何度<rt>なんど</rt></ruby>も<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>った＿＿＿、<ruby>離婚<rt>りこん</rt></ruby>することに<ruby>決<rt>き</rt></ruby>めた。", options:["あとで","ところ","きり","後"], answer:3, grammar:"した後", explanation:"多次商量后做出决断（离婚），决断结果用「した後」。"},
    {q:"<ruby>結局<rt>けっきょく</rt></ruby><ruby>彼女<rt>かのじょ</rt></ruby>に<ruby>告白<rt>こくはく</rt></ruby>でき＿＿＿だった。", options:["たきり","るところ","ずじまい","たあとで"], answer:2, grammar:"ずじまい", explanation:"最终没能告白，含遗憾语气用「ずじまい」。"},
    {q:"<ruby>出<rt>で</rt></ruby>かけた＿＿＿、まだ<ruby>帰<rt>かえ</rt></ruby>ってきていない。", options:["ところ","あとで","ずじまい","きり"], answer:3, grammar:"たきり", explanation:"出门后一直没回来，状态持续用「たきり」。"},
    {q:"<ruby>危<rt>あや</rt></ruby>うく<ruby>財布<rt>さいふ</rt></ruby>を<ruby>落<rt>お</rt></ruby>とす＿＿＿。", options:["きりだ","ずじまいだ","ところだった","あとだ"], answer:2, grammar:"ところだった", explanation:"险些把钱包弄丢（实际没丢），搭配「危うく」用「ところだった」。"}
  ]
},

"Day20": {
  title: "第21課 语法（程度・极端表达）",
  grammar: [
    {
      name: "〜ぐらい／〜くらい",
      meaning: "…左右／…程度（表示大概程度）",
      structure: "名詞／動詞普通形＋ぐらい／くらい",
      examples: [
        {jp:"<ruby>泣<rt>な</rt></ruby>きたいぐらい<ruby>悔<rt>くや</rt></ruby>しかった。", cn:"后悔到想哭的程度。"},
        {jp:"<ruby>死<rt>し</rt></ruby>ぬほどではないが、<ruby>倒<rt>たお</rt></ruby>れるくらい<ruby>疲<rt>つか</rt></ruby>れた。", cn:"虽不至于累死，但累到快要倒下的程度。"}
      ],
      keyPoint: "N2用法：不是「大约」，而是表示极端程度！「〜ぐらい＋形容詞」= 到了…的程度 💥"
    },
    {
      name: "〜など／〜なんか／〜なんて",
      meaning: "…什么的（轻视/谦虚/惊讶）",
      structure: "名詞＋など／なんか／なんて",
      examples: [
        {jp:"あんな<ruby>映画<rt>えいが</rt></ruby>なんか<ruby>見<rt>み</rt></ruby>る<ruby>価値<rt>かち</rt></ruby>もない。", cn:"那种电影什么的根本不值得看。"},
        {jp:"<ruby>私<rt>わたし</rt></ruby>なんかまだまだです。", cn:"我什么的还差得远呢。"},
        {jp:"<ruby>彼<rt>かれ</rt></ruby>が<ruby>合格<rt>ごうかく</rt></ruby>するなんて<ruby>信<rt>しん</rt></ruby>じられない。", cn:"他竟然合格了，真不敢相信。"}
      ],
      keyPoint: "など（书面）＞なんか（口语轻视）＞なんて（口语惊讶）。语气由正式到随意 💬"
    },
    {
      name: "〜まで／〜までして／〜てまで",
      meaning: "甚至到…的地步（极端手段）",
      structure: "名詞＋まで／動詞て形＋まで／動詞マス形＋までして",
      examples: [
        {jp:"<ruby>借金<rt>しゃっきん</rt></ruby>までしてブランド<ruby>品<rt>ひん</rt></ruby>を<ruby>買<rt>か</rt></ruby>う<ruby>必要<rt>ひつよう</rt></ruby>はない。", cn:"没必要借钱到买名牌的地步。"},
        {jp:"<ruby>親<rt>おや</rt></ruby>に<ruby>嘘<rt>うそ</rt></ruby>をついてまで<ruby>遊<rt>あそ</rt></ruby>びに<ruby>行<rt>い</rt></ruby>きたくない。", cn:"不想撒谎骗父母到去玩的地步。"}
      ],
      keyPoint: "强调为了某目的不惜采取极端手段，通常含否定评价语气 😤"
    },
    {
      name: "〜としても〜ない",
      meaning: "即使想…也不能…",
      structure: "動詞意向形＋としても＋動詞ない形",
      examples: [
        {jp:"<ruby>忘<rt>わす</rt></ruby>れようとしても<ruby>忘<rt>わす</rt></ruby>れられない。", cn:"即使想忘也忘不了。"},
        {jp:"<ruby>説明<rt>せつめい</rt></ruby>しようとしても、うまく<ruby>言葉<rt>ことば</rt></ruby>にできない。", cn:"即使想解释也无法很好地用语言表达。"}
      ],
      keyPoint: "前后用同一动词或相关动词。表示努力也做不到的无奈 😣"
    },
    {
      name: "〜さえ",
      meaning: "甚至…／连…都…（举极端例子）",
      structure: "名詞＋さえ／動詞マス形＋さえすれば",
      examples: [
        {jp:"<ruby>漢字<rt>かんじ</rt></ruby>どころか、ひらがなさえ<ruby>読<rt>よ</rt></ruby>めない。", cn:"别说汉字了，连平假名都不会读。"},
        {jp:"<ruby>努力<rt>どりょく</rt></ruby>さえすれば、<ruby>合格<rt>ごうかく</rt></ruby>できる。", cn:"只要努力就能合格。"}
      ],
      keyPoint: "两种用法：①连…都…（极端举例）②只要…就…（さえ〜ば）💡"
    },
    {
      name: "〜てでも",
      meaning: "即使…也要（不惜代价）",
      structure: "動詞て形＋でも",
      examples: [
        {jp:"<ruby>徹夜<rt>てつや</rt></ruby>してでも<ruby>明日<rt>あした</rt></ruby>までに<ruby>仕上<rt>しあ</rt></ruby>げる。", cn:"即使通宵也要在明天之前完成。"},
        {jp:"<ruby>借金<rt>しゃっきん</rt></ruby>してでも<ruby>留学<rt>りゅうがく</rt></ruby>したい。", cn:"即使借钱也想留学。"}
      ],
      keyPoint: "强调决心，不惜一切代价。比「ても」语气更强烈 🔥"
    }
  ],
  questions: [
    {q:"<ruby>泣<rt>な</rt></ruby>きたい＿＿＿<ruby>悔<rt>くや</rt></ruby>しかった。", options:["さえ","ぐらい","まで","なんか"], answer:1, grammar:"ぐらい", explanation:"后悔到想哭的程度，表示极端程度用「ぐらい」。"},
    {q:"あんな<ruby>映画<rt>えいが</rt></ruby>＿＿＿<ruby>見<rt>み</rt></ruby>る<ruby>価値<rt>かち</rt></ruby>もない。", options:["さえ","ぐらい","なんか","てでも"], answer:2, grammar:"なんか", explanation:"那种电影什么的不值得看，口语中表示轻视用「なんか」。"},
    {q:"<ruby>借金<rt>しゃっきん</rt></ruby>＿＿＿ブランド<ruby>品<rt>ひん</rt></ruby>を<ruby>買<rt>か</rt></ruby>う<ruby>必要<rt>ひつよう</rt></ruby>はない。", options:["なんか","さえ","までして","てでも"], answer:2, grammar:"までして", explanation:"没必要借钱到买名牌的地步，极端手段含否定评价用「までして」。"},
    {q:"<ruby>忘<rt>わす</rt></ruby>れようとしても＿＿＿。", options:["忘れたい","忘れられない","忘れるまで","忘れなんか"], answer:1, grammar:"としても〜ない", explanation:"即使想忘也忘不了，「〜ようとしても〜ない」的固定句式。"},
    {q:"<ruby>漢字<rt>かんじ</rt></ruby>どころか、ひらがな＿＿＿<ruby>読<rt>よ</rt></ruby>めない。", options:["なんか","ぐらい","まで","さえ"], answer:3, grammar:"さえ", explanation:"连平假名都不会读，举极端例子用「さえ」。"},
    {q:"<ruby>努力<rt>どりょく</rt></ruby>＿＿＿すれば、<ruby>合格<rt>ごうかく</rt></ruby>できる。", options:["まで","なんか","さえ","ぐらい"], answer:2, grammar:"さえ", explanation:"只要努力就能合格，「さえ〜ば」表示充分条件。"},
    {q:"<ruby>徹夜<rt>てつや</rt></ruby>して＿＿＿<ruby>明日<rt>あした</rt></ruby>までに<ruby>仕上<rt>しあ</rt></ruby>げる。", options:["さえ","まで","でも","なんか"], answer:2, grammar:"てでも", explanation:"即使通宵也要完成，不惜代价的决心用「てでも」。"},
    {q:"<ruby>彼<rt>かれ</rt></ruby>が<ruby>合格<rt>ごうかく</rt></ruby>する＿＿＿<ruby>信<rt>しん</rt></ruby>じられない。", options:["さえ","ぐらい","なんて","まで"], answer:2, grammar:"なんて", explanation:"他竟然合格了，表示惊讶/意外用「なんて」。"}
  ]
},

"Day21": {
  title: "第22課 语法（推测与委婉表达）",
  grammar: [
    {
      name: "〜かねない",
      meaning: "有可能…（负面担忧）",
      structure: "動詞マス形＋かねない",
      examples: [
        {jp:"<ruby>個人<rt>こじん</rt></ruby><ruby>情報<rt>じょうほう</rt></ruby>が<ruby>悪用<rt>あくよう</rt></ruby>されかねない。", cn:"个人信息有可能被盗用。"},
        {jp:"このままでは<ruby>大<rt>おお</rt></ruby>きな<ruby>事故<rt>じこ</rt></ruby>になりかねない。", cn:"照这样下去有可能酿成大事故。"}
      ],
      keyPoint: "仅用于负面事项！形式有否定词「ない」但意思是肯定（可能发生）⚠️"
    },
    {
      name: "〜恐れがある",
      meaning: "恐怕会…／有…的危险",
      structure: "動詞普通形／名詞＋の＋恐れがある",
      examples: [
        {jp:"<ruby>台風<rt>たいふう</rt></ruby>が<ruby>接近<rt>せっきん</rt></ruby>する<ruby>恐<rt>おそ</rt></ruby>れがあります。", cn:"台风恐怕会靠近。"},
        {jp:"<ruby>大雨<rt>おおあめ</rt></ruby>による<ruby>洪水<rt>こうずい</rt></ruby>の<ruby>恐<rt>おそ</rt></ruby>れがある。", cn:"有因大雨引发洪水的危险。"}
      ],
      keyPoint: "多用于灾害/风险等正式场景，新闻报道常用 📺"
    },
    {
      name: "〜に違いない",
      meaning: "一定是…／肯定是…（有根据的确信）",
      structure: "普通形＋に違いない",
      examples: [
        {jp:"こんなに<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>なら、<ruby>長<rt>なが</rt></ruby>く<ruby>日本<rt>にほん</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいたに<ruby>違<rt>ちが</rt></ruby>いない。", cn:"日语这么好的话，一定在日本住了很久。"},
        {jp:"<ruby>彼<rt>かれ</rt></ruby>は<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れたに<ruby>違<rt>ちが</rt></ruby>いない。", cn:"他一定习惯了生活。"}
      ],
      keyPoint: "基于逻辑推断的确信，书面语。口语版是「にきまっている」📖"
    },
    {
      name: "〜にきまっている",
      meaning: "肯定是…（主观确信，口语）",
      structure: "普通形＋にきまっている",
      examples: [
        {jp:"そんな<ruby>話<rt>はなし</rt></ruby>は<ruby>嘘<rt>うそ</rt></ruby>にきまっている。", cn:"那种话肯定是骗人的。"},
        {jp:"こんなに<ruby>練習<rt>れんしゅう</rt></ruby>したんだから、<ruby>勝<rt>か</rt></ruby>つにきまっている。", cn:"练习了这么多，肯定会赢。"}
      ],
      keyPoint: "口语版的「に違いない」，语气更随意更主观 🗣️"
    },
    {
      name: "〜ではあるまいか",
      meaning: "难道不是…吗（书面推测反问）",
      structure: "普通形＋のではあるまいか",
      examples: [
        {jp:"この<ruby>計画<rt>けいかく</rt></ruby>は<ruby>無理<rt>むり</rt></ruby>なのではあるまいか。", cn:"这个计划难道不是不可行的吗？"},
        {jp:"<ruby>彼<rt>かれ</rt></ruby>の<ruby>意見<rt>いけん</rt></ruby>が<ruby>正<rt>ただ</rt></ruby>しいのではあるまいか。", cn:"他的意见难道不是正确的吗？"}
      ],
      keyPoint: "书面语，相当于口语的「のではないか」。用于委婉提出推测 📝"
    }
  ],
  questions: [
    {q:"<ruby>個人<rt>こじん</rt></ruby><ruby>情報<rt>じょうほう</rt></ruby>が<ruby>悪用<rt>あくよう</rt></ruby>され＿＿＿。", options:["かねる","かねない","に違いない","恐れがある"], answer:1, grammar:"かねない", explanation:"个人信息有可能被盗用（负面担忧），用「かねない」。"},
    {q:"<ruby>台風<rt>たいふう</rt></ruby>が<ruby>接近<rt>せっきん</rt></ruby>する＿＿＿。", options:["かねない","に違いない","にきまっている","恐れがあります"], answer:3, grammar:"恐れがある", explanation:"台风靠近是灾害风险，正式场合用「恐れがある」。"},
    {q:"こんなに<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>なら、<ruby>長<rt>なが</rt></ruby>く<ruby>日本<rt>にほん</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいた＿＿＿。", options:["かねない","恐れがある","にきまっている","に違いない"], answer:3, grammar:"に違いない", explanation:"基于「日语好」的逻辑推断「一定住了很久」，用「に違いない」。"},
    {q:"そんな<ruby>話<rt>はなし</rt></ruby>は<ruby>嘘<rt>うそ</rt></ruby>＿＿＿。", options:["に違いない","にきまっている","かねない","恐れがある"], answer:1, grammar:"にきまっている", explanation:"「肯定是骗人的」，口语中的主观确信用「にきまっている」。"},
    {q:"このままでは<ruby>大<rt>おお</rt></ruby>きな<ruby>事故<rt>じこ</rt></ruby>になり＿＿＿。", options:["に違いない","にきまっている","かねない","恐れがない"], answer:2, grammar:"かねない", explanation:"照这样下去可能酿成大事故（负面担忧），用「かねない」。"},
    {q:"ご<ruby>質問<rt>しつもん</rt></ruby>には<ruby>回答<rt>かいとう</rt></ruby>し＿＿＿。", options:["かねない","かねます","に違いない","恐れがある"], answer:1, grammar:"かねる", explanation:"难以回答您的问题，正式委婉拒绝用「かねます」。注意「かねる」≠「かねない」！"},
    {q:"<ruby>大雨<rt>おおあめ</rt></ruby>による<ruby>洪水<rt>こうずい</rt></ruby>の＿＿＿。", options:["かねない","に違いない","にきまっている","恐れがある"], answer:3, grammar:"恐れがある", explanation:"有洪水的危险，灾害风险正式表达用「恐れがある」。"},
    {q:"こんなに<ruby>練習<rt>れんしゅう</rt></ruby>したんだから、<ruby>勝<rt>か</rt></ruby>つ＿＿＿。", options:["かねない","恐れがある","にきまっている","に違いない"], answer:2, grammar:"にきまっている", explanation:"练了这么多肯定赢，口语中的主观确信用「にきまっている」。"}
  ]
},
"Day22": {
  title: "第23課 语法（真理・限定・建议表达）",
  grammar: [
    {
      name: "〜ものだ（真理）",
      meaning: "…是常理/本来就是…（表示普遍真理、客观事实）",
      structure: "動詞普通形＋ものだ",
      examples: [
        {jp:"<ruby>人<rt>ひと</rt></ruby>は<ruby>外見<rt>がいけん</rt></ruby>だけでは<ruby>分<rt>わ</rt></ruby>からないものだ。", cn:"人不能仅凭外表判断。"},
        {jp:"どんな<ruby>人<rt>ひと</rt></ruby>にもクセがあるものだ。", cn:"任何人都有习惯/毛病。"}
      ],
      keyPoint: "强调规律性真理，语气客观。和「というものだ」区分：ものだ=自然规律，というものだ=社会常识 📖"
    },
    {
      name: "〜というものだ",
      meaning: "这就叫…/这才是…（表示社会常识、公认事实）",
      structure: "句子普通形＋というものだ",
      examples: [
        {jp:"<ruby>他人<rt>たにん</rt></ruby>のものを<ruby>断<rt>ことわ</rt></ruby>りもなく<ruby>使<rt>つか</rt></ruby>うのは<ruby>厚<rt>あつ</rt></ruby>かましいというものだ。", cn:"不打招呼就用别人的东西，这就叫厚脸皮。"},
        {jp:"<ruby>相手<rt>あいて</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かないのは<ruby>失礼<rt>しつれい</rt></ruby>というものだ。", cn:"不听对方说话，这叫失礼。"}
      ],
      keyPoint: "表示社会公认的评价/判断，带有说话者的主观态度 🧑‍⚖️"
    },
    {
      name: "〜に<ruby>過<rt>す</rt></ruby>ぎない",
      meaning: "只不过…/仅仅…（数量或程度的限定）",
      structure: "名詞／動詞た形＋に過ぎない",
      examples: [
        {jp:"<ruby>調査<rt>ちょうさ</rt></ruby>で<ruby>全<rt>まった</rt></ruby>く<ruby>米<rt>こめ</rt></ruby>を<ruby>食<rt>た</rt></ruby>べない<ruby>人<rt>ひと</rt></ruby>は1.2%に<ruby>過<rt>す</rt></ruby>ぎなかった。", cn:"调查中完全不吃米饭的人仅占1.2%。"},
        {jp:"<ruby>俺<rt>おれ</rt></ruby>は<ruby>当<rt>あ</rt></ruby>たり<ruby>前<rt>まえ</rt></ruby>のことをしたに<ruby>過<rt>す</rt></ruby>ぎない。", cn:"我只不过做了理所当然的事。"}
      ],
      keyPoint: "常含轻视或谦虚语气，强调「仅此而已」💧"
    },
    {
      name: "〜にほかならない",
      meaning: "正是…/就是…（强调断定）",
      structure: "名詞＋にほかならない",
      examples: [
        {jp:"<ruby>将来<rt>しょうらい</rt></ruby>この<ruby>国<rt>くに</rt></ruby>を<ruby>支<rt>ささ</rt></ruby>えるのは<ruby>若<rt>わか</rt></ruby>い<ruby>君<rt>きみ</rt></ruby>たちにほかならない。", cn:"将来支撑这个国家的正是年轻的你们。"},
        {jp:"<ruby>成功<rt>せいこう</rt></ruby>できたのは<ruby>皆<rt>みな</rt></ruby>さんの<ruby>協力<rt>きょうりょく</rt></ruby>にほかならない。", cn:"能成功正是因为大家的合作。"}
      ],
      keyPoint: "用于强烈肯定判断，排除其他可能性 ✅"
    },
    {
      name: "〜に<ruby>越<rt>こ</rt></ruby>したことはない",
      meaning: "最好…/…当然好（委婉建议）",
      structure: "動詞辞書形／い形容詞＋に越したことはない",
      examples: [
        {jp:"<ruby>旅行<rt>りょこう</rt></ruby>の<ruby>荷物<rt>にもつ</rt></ruby>は<ruby>軽<rt>かる</rt></ruby>いに<ruby>越<rt>こ</rt></ruby>したことはない。", cn:"旅行行李当然是越轻越好。"},
        {jp:"<ruby>体<rt>からだ</rt></ruby>のためには<ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>るに<ruby>越<rt>こ</rt></ruby>したことはない。", cn:"为了身体，还是早睡比较好。"}
      ],
      keyPoint: "隐含「虽然不绝对但这是最优选」的语感，听力高频！🛏️"
    },
    {
      name: "〜べきだ",
      meaning: "应该…（主观主张/道义上应该）",
      structure: "動詞辞書形＋べきだ（否定：べきではない）",
      examples: [
        {jp:"<ruby>学生<rt>がくせい</rt></ruby>は<ruby>勉強<rt>べんきょう</rt></ruby>すべきだ。", cn:"学生应该学习。"},
        {jp:"<ruby>約束<rt>やくそく</rt></ruby>は<ruby>守<rt>まも</rt></ruby>るべきだ。", cn:"应该遵守约定。"}
      ],
      keyPoint: "主观主张，不用于法律规定！否定必须是「べきではない」，不能说「ないべきだ」⚖️"
    },
    {
      name: "〜しかない／〜より<ruby>他<rt>ほか</rt></ruby>ない",
      meaning: "只能…/别无选择（无奈之举）",
      structure: "動詞辞書形＋しかない／より他ない",
      examples: [
        {jp:"バスがないので、<ruby>歩<rt>ある</rt></ruby>いて<ruby>行<rt>い</rt></ruby>くしかない。", cn:"没有公交车，只能走着去了。"},
        {jp:"<ruby>自分<rt>じぶん</rt></ruby>でやるより<ruby>他<rt>ほか</rt></ruby>ない。", cn:"只能自己做了。"}
      ],
      keyPoint: "表示别无他法，无奈接受。两个说法意思完全一样 😤"
    }
  ],
  questions: [
    {q:"<ruby>人<rt>ひと</rt></ruby>は<ruby>外見<rt>がいけん</rt></ruby>だけでは<ruby>分<rt>わ</rt></ruby>からない＿＿＿。", options:["ものだ","ことだ","べきだ","しかない"], answer:0, grammar:"ものだ", explanation:"人不能仅凭外表判断——这是普遍真理，用「ものだ」表示客观规律。"},
    {q:"<ruby>調査<rt>ちょうさ</rt></ruby>で<ruby>全<rt>まった</rt></ruby>く<ruby>米<rt>こめ</rt></ruby>を<ruby>食<rt>た</rt></ruby>べない<ruby>人<rt>ひと</rt></ruby>は1.2%＿＿＿。", options:["にほかならない","に過ぎなかった","に越したことはない","というものだ"], answer:1, grammar:"に過ぎない", explanation:"仅占1.2%，强调数量少，用「に過ぎない」表示「只不过」。"},
    {q:"<ruby>将来<rt>しょうらい</rt></ruby>この<ruby>国<rt>くに</rt></ruby>を<ruby>支<rt>ささ</rt></ruby>えるのは<ruby>若<rt>わか</rt></ruby>い<ruby>君<rt>きみ</rt></ruby>たち＿＿＿。", options:["に過ぎない","に越したことはない","にほかならない","というものだ"], answer:2, grammar:"にほかならない", explanation:"「正是年轻的你们」，用「にほかならない」表示强烈断定，排除其他可能。"},
    {q:"<ruby>旅行<rt>りょこう</rt></ruby>の<ruby>荷物<rt>にもつ</rt></ruby>は<ruby>軽<rt>かる</rt></ruby>い＿＿＿。", options:["べきだ","しかない","ものだ","に越したことはない"], answer:3, grammar:"に越したことはない", explanation:"行李当然越轻越好，委婉建议用「に越したことはない」。"},
    {q:"<ruby>学生<rt>がくせい</rt></ruby>は<ruby>勉強<rt>べんきょう</rt></ruby>す＿＿＿。", options:["ものだ","べきだ","しかない","に過ぎない"], answer:1, grammar:"べきだ", explanation:"学生应该学习——主观主张/道义上的应该，用「べきだ」。注意する→すべきだ。"},
    {q:"バスがないので、<ruby>歩<rt>ある</rt></ruby>いて<ruby>行<rt>い</rt></ruby>く＿＿＿。", options:["べきだ","ものだ","に越したことはない","しかない"], answer:3, grammar:"しかない", explanation:"没有公交车，别无选择只能走路，用「しかない」表示无奈。"},
    {q:"<ruby>他人<rt>たにん</rt></ruby>のものを<ruby>断<rt>ことわ</rt></ruby>りもなく<ruby>使<rt>つか</rt></ruby>うのは<ruby>厚<rt>あつ</rt></ruby>かましい＿＿＿。", options:["ものだ","というものだ","べきだ","しかない"], answer:1, grammar:"というものだ", explanation:"不打招呼就用别人的东西是厚脸皮——这是社会公认的评价，用「というものだ」。"},
    {q:"<ruby>成功<rt>せいこう</rt></ruby>できたのは<ruby>皆<rt>みな</rt></ruby>さんの<ruby>協力<rt>きょうりょく</rt></ruby>＿＿＿。", options:["に過ぎない","にほかならない","に越したことはない","しかない"], answer:1, grammar:"にほかならない", explanation:"能成功正是因为大家的合作，强烈断定用「にほかならない」。"},
    {q:"<ruby>彼<rt>かれ</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>に6<ruby>年<rt>ねん</rt></ruby><ruby>住<rt>す</rt></ruby>んでいるので、<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>な＿＿＿。", options:["べきだ","はずだ","ものだ","しかない"], answer:1, grammar:"はずだ", explanation:"他住了6年所以日语应该好——客观推测用「はずだ」。「べきだ」是主观主张不合适。"}
  ]
},

"Day23": {
  title: "第24課 语法（劝诱・建议・否定表达）",
  grammar: [
    {
      name: "〜（よ）うではないか",
      meaning: "让我们…吧（强烈劝诱/呼吁）",
      structure: "動詞意向形＋ではないか／じゃないか",
      examples: [
        {jp:"<ruby>環境<rt>かんきょう</rt></ruby>を<ruby>守<rt>まも</rt></ruby>るため、<ruby>何<rt>なに</rt></ruby>ができるか<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えようではないか。", cn:"为了保护环境，让我们一起思考能做什么吧。"},
        {jp:"みんなで<ruby>協力<rt>きょうりょく</rt></ruby>してイベントを<ruby>成功<rt>せいこう</rt></ruby>させようじゃないか。", cn:"让大家齐心协力把活动搞成功吧。"}
      ],
      keyPoint: "书面化、男性化语气，多用于演讲、号召场景。「じゃないか」比「ではないか」更口语 📢"
    },
    {
      name: "〜ことだ（建议）",
      meaning: "应该…/重要的是…（给出建议）",
      structure: "動詞辞書形／ない形＋ことだ",
      examples: [
        {jp:"<ruby>普段<rt>ふだん</rt></ruby>から<ruby>思<rt>おも</rt></ruby>いついたことをメモすることだ。", cn:"平时想到的事要记笔记。"},
        {jp:"<ruby>太<rt>ふと</rt></ruby>りたくなければ<ruby>夜<rt>よる</rt></ruby><ruby>遅<rt>おそ</rt></ruby>くに<ruby>食<rt>た</rt></ruby>べないことだ。", cn:"不想变胖就不要深夜吃东西。"}
      ],
      keyPoint: "辞書形＋ことだ=应该做；ない形＋ことだ=不应该做。和「べきだ」相比语气更温和 💡"
    },
    {
      name: "〜ものだ／ものではない（常识）",
      meaning: "本应该…/不该…（社会常识、行为规范）",
      structure: "動詞辞書形＋ものだ／ものではない",
      examples: [
        {jp:"<ruby>人<rt>ひと</rt></ruby>と<ruby>人<rt>ひと</rt></ruby>の<ruby>出会<rt>であ</rt></ruby>いは<ruby>大切<rt>たいせつ</rt></ruby>にするものだ。", cn:"人与人的相遇应该珍惜。"},
        {jp:"<ruby>他人<rt>たにん</rt></ruby>にお<ruby>金<rt>かね</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>貸<rt>か</rt></ruby>すものではない。", cn:"不应该轻易借钱给别人。"}
      ],
      keyPoint: "这里的ものだ≠真理，而是行为规范/常识。ものではない=不该做（忠告）🚫"
    },
    {
      name: "〜ことはない",
      meaning: "没必要…（否定必要性）",
      structure: "動詞辞書形＋ことはない",
      examples: [
        {jp:"<ruby>電話<rt>でんわ</rt></ruby>で<ruby>済<rt>す</rt></ruby>むことだから、わざわざ<ruby>行<rt>い</rt></ruby>くことはない。", cn:"电话就能解决，没必要特地跑一趟。"},
        {jp:"<ruby>彼<rt>かれ</rt></ruby>の<ruby>言葉<rt>ことば</rt></ruby>など<ruby>気<rt>き</rt></ruby>にすることはない。", cn:"没必要在意他的话。"}
      ],
      keyPoint: "考试超高频！只接动词辞书形。和「なくてもいい」意思接近但更强调没必要 ⭐"
    },
    {
      name: "〜ものか",
      meaning: "怎么可能…/绝不…（强烈否定）",
      structure: "動詞辞書形＋ものか",
      examples: [
        {jp:"あんな<ruby>無責任<rt>むせきにん</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>働<rt>はたら</rt></ruby>くものか。", cn:"我怎么可能和那种不负责的人共事。"},
        {jp:"<ruby>他人<rt>たにん</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>言<rt>い</rt></ruby>われても、<ruby>計画<rt>けいかく</rt></ruby>をあきらめるものか。", cn:"不管别人怎么说，我绝不放弃计划。"}
      ],
      keyPoint: "没有否定词但表示否定！口语中很常用，听力常考 🔥"
    }
  ],
  questions: [
    {q:"<ruby>環境<rt>かんきょう</rt></ruby>を<ruby>守<rt>まも</rt></ruby>るため、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>え＿＿＿。", options:["ものか","ことはない","ようではないか","ことだ"], answer:2, grammar:"ようではないか", explanation:"「让我们一起思考吧」，强烈呼吁用「ようではないか」。"},
    {q:"<ruby>太<rt>ふと</rt></ruby>りたくなければ<ruby>夜<rt>よる</rt></ruby><ruby>遅<rt>おそ</rt></ruby>くに<ruby>食<rt>た</rt></ruby>べない＿＿＿。", options:["ものか","ことだ","ことはない","ものだ"], answer:1, grammar:"ことだ", explanation:"不想变胖就不要深夜吃——「ない形＋ことだ」表示建议不要做某事。"},
    {q:"<ruby>電話<rt>でんわ</rt></ruby>で<ruby>済<rt>す</rt></ruby>むことだから、わざわざ<ruby>行<rt>い</rt></ruby>く＿＿＿。", options:["ものだ","ことだ","ものか","ことはない"], answer:3, grammar:"ことはない", explanation:"电话能解决就没必要跑一趟，否定必要性用「ことはない」。"},
    {q:"あんな<ruby>無責任<rt>むせきにん</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>働<rt>はたら</rt></ruby>く＿＿＿。", options:["ことだ","ものか","ことはない","ものだ"], answer:1, grammar:"ものか", explanation:"「怎么可能和那种人共事」，强烈否定用「ものか」。"},
    {q:"<ruby>人<rt>ひと</rt></ruby>と<ruby>人<rt>ひと</rt></ruby>の<ruby>出会<rt>であ</rt></ruby>いは<ruby>大切<rt>たいせつ</rt></ruby>にする＿＿＿。", options:["ことはない","ものか","ものだ","ことだ"], answer:2, grammar:"ものだ", explanation:"人与人的相遇应该珍惜——社会常识/行为规范用「ものだ」。"},
    {q:"<ruby>他人<rt>たにん</rt></ruby>にお<ruby>金<rt>かね</rt></ruby>を<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>貸<rt>か</rt></ruby>す＿＿＿。", options:["ものか","ことだ","ものではない","ことはない"], answer:2, grammar:"ものではない", explanation:"不应该轻易借钱给别人——行为规范的否定用「ものではない」。"},
    {q:"<ruby>彼<rt>かれ</rt></ruby>の<ruby>言葉<rt>ことば</rt></ruby>など<ruby>気<rt>き</rt></ruby>にする＿＿＿。", options:["ことだ","ものだ","ものか","ことはない"], answer:3, grammar:"ことはない", explanation:"没必要在意他的话，「ことはない」=没必要做某事。"},
    {q:"<ruby>普段<rt>ふだん</rt></ruby>から<ruby>思<rt>おも</rt></ruby>いついたことをメモする＿＿＿。", options:["ことはない","ものか","ものではない","ことだ"], answer:3, grammar:"ことだ", explanation:"平时要记笔记——给出建议用「ことだ」。"},
    {q:"<ruby>計画<rt>けいかく</rt></ruby>をあきらめる＿＿＿。<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>最後<rt>さいご</rt></ruby>までやる。", options:["ものか","ことだ","ことはない","ものだ"], answer:0, grammar:"ものか", explanation:"「绝不放弃计划」——强烈的否定意志用「ものか」。"}
  ]
},

"Day24": {
  title: "第25課 语法（强烈情感・义务表达）",
  grammar: [
    {
      name: "〜てしょうがない／てたまらない／て<ruby>仕方<rt>しかた</rt></ruby>がない",
      meaning: "…得不得了/…得受不了（强烈的情感或状态）",
      structure: "動詞て形／イ形去い＋くて／ナ形＋で ＋ しょうがない／たまらない／仕方がない",
      examples: [
        {jp:"<ruby>久<rt>ひさ</rt></ruby>しぶりに<ruby>彼女<rt>かのじょ</rt></ruby>に<ruby>会<rt>あ</rt></ruby>えるのが<ruby>嬉<rt>うれ</rt></ruby>しくてしょうがない。", cn:"时隔很久能见到她，开心得不得了。"},
        {jp:"<ruby>赤<rt>あか</rt></ruby>ちゃんはお<ruby>母<rt>かあ</rt></ruby>さんがいないと<ruby>不安<rt>ふあん</rt></ruby>でたまらない。", cn:"婴儿没有妈妈在就不安得不得了。"},
        {jp:"<ruby>家<rt>いえ</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くのスーパーが<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>閉<rt>し</rt></ruby>まって<ruby>不便<rt>ふべん</rt></ruby>で<ruby>仕方<rt>しかた</rt></ruby>がない。", cn:"家附近的超市都关了，不方便得不得了。"}
      ],
      keyPoint: "三个可以互换！第三人称做主语时句尾要加「らしい」「ようだ」🔥"
    },
    {
      name: "〜てならない",
      meaning: "非常…/…得不行（无法抑制的感觉）",
      structure: "動詞て形／イ形去い＋くて／ナ形＋で ＋ ならない",
      examples: [
        {jp:"さっきから<ruby>何<rt>なに</rt></ruby>か<ruby>大切<rt>たいせつ</rt></ruby>なことを<ruby>忘<rt>わす</rt></ruby>れてるような<ruby>気<rt>き</rt></ruby>がしてならない。", cn:"总感觉忘了什么重要的事，这种感觉太强烈了。"},
        {jp:"<ruby>明日<rt>あした</rt></ruby>の<ruby>面接<rt>めんせつ</rt></ruby>でうまく<ruby>話<rt>はな</rt></ruby>せるかどうか<ruby>心配<rt>しんぱい</rt></ruby>でならない。", cn:"非常担心明天面试能否顺利。"}
      ],
      keyPoint: "和上面三个类似但更书面，常搭配「気がしてならない」（总觉得…）💭"
    },
    {
      name: "〜ずにはいられない",
      meaning: "情不自禁地…/忍不住…（无法控制的行为）",
      structure: "動詞未然形＋ずにはいられない（する→せずにはいられない）",
      examples: [
        {jp:"この<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>くと<ruby>体<rt>からだ</rt></ruby>を<ruby>動<rt>うご</rt></ruby>かさずにはいられない。", cn:"听到这首歌就忍不住动起来。"},
        {jp:"ケーキ<ruby>屋<rt>や</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>を<ruby>通<rt>とお</rt></ruby>ると<ruby>買<rt>か</rt></ruby>わずにはいられない。", cn:"经过蛋糕店就忍不住想买。"}
      ],
      keyPoint: "未然形接续！する的特殊变化：せずにはいられない（不是しず）🍰"
    },
    {
      name: "〜ないわけにはいかない",
      meaning: "不能不…/必须…（心理上的义务）",
      structure: "動詞ない形＋わけにはいかない",
      examples: [
        {jp:"<ruby>親友<rt>しんゆう</rt></ruby>の<ruby>結婚式<rt>けっこんしき</rt></ruby>だから、<ruby>忙<rt>いそが</rt></ruby>しくても<ruby>出席<rt>しゅっせき</rt></ruby>しないわけにはいかない。", cn:"是好朋友的婚礼，再忙也必须参加。"},
        {jp:"こんなに<ruby>歯<rt>は</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>くなっては、<ruby>病院<rt>びょういん</rt></ruby>に<ruby>行<rt>い</rt></ruby>かないわけにはいかない。", cn:"牙痛成这样，必须去医院。"}
      ],
      keyPoint: "强调心理上/道义上必须做，和「なければならない」（客观规定）区分 💪"
    },
    {
      name: "〜ざるを<ruby>得<rt>え</rt></ruby>ない",
      meaning: "不得不…（被迫/无奈的义务）",
      structure: "動詞未然形＋ざるを得ない（する→せざるを得ない）",
      examples: [
        {jp:"<ruby>週末<rt>しゅうまつ</rt></ruby>も<ruby>仕事<rt>しごと</rt></ruby>で<ruby>出<rt>で</rt></ruby>かけざるを<ruby>得<rt>え</rt></ruby>ない。", cn:"周末也因为工作不得不出门。"},
        {jp:"<ruby>経営<rt>けいえい</rt></ruby><ruby>方針<rt>ほうしん</rt></ruby>を<ruby>変更<rt>へんこう</rt></ruby>せざるを<ruby>得<rt>え</rt></ruby>ない。", cn:"不得不改变经营方针。"}
      ],
      keyPoint: "书面语！する→「せざるを得ない」是超重要特殊变化，考试必考 ⭐⭐⭐"
    }
  ],
  questions: [
    {q:"<ruby>久<rt>ひさ</rt></ruby>しぶりに<ruby>彼女<rt>かのじょ</rt></ruby>に<ruby>会<rt>あ</rt></ruby>えるのが<ruby>嬉<rt>うれ</rt></ruby>しくて＿＿＿。", options:["ならない","ざるを得ない","しょうがない","わけにはいかない"], answer:2, grammar:"てしょうがない", explanation:"开心得不得了，用「てしょうがない」表示强烈的情感。"},
    {q:"さっきから<ruby>何<rt>なに</rt></ruby>か<ruby>忘<rt>わす</rt></ruby>れてるような<ruby>気<rt>き</rt></ruby>がして＿＿＿。", options:["しょうがない","ならない","ざるを得ない","わけにはいかない"], answer:1, grammar:"てならない", explanation:"总感觉忘了什么——无法抑制的感觉用「てならない」。常搭配「気がしてならない」。"},
    {q:"ケーキ<ruby>屋<rt>や</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>を<ruby>通<rt>とお</rt></ruby>ると<ruby>買<rt>か</rt></ruby>わ＿＿＿。", options:["ざるを得ない","ずにはいられない","ないわけにはいかない","てならない"], answer:1, grammar:"ずにはいられない", explanation:"忍不住想买——情不自禁的行为用「ずにはいられない」。買う→買わ（未然形）。"},
    {q:"<ruby>親友<rt>しんゆう</rt></ruby>の<ruby>結婚式<rt>けっこんしき</rt></ruby>だから、<ruby>出席<rt>しゅっせき</rt></ruby>しない＿＿＿。", options:["ずにはいられない","てしょうがない","わけにはいかない","ざるを得ない"], answer:2, grammar:"ないわけにはいかない", explanation:"好朋友的婚礼必须参加——心理上的义务用「ないわけにはいかない」。"},
    {q:"<ruby>経営<rt>けいえい</rt></ruby><ruby>方針<rt>ほうしん</rt></ruby>を<ruby>変更<rt>へんこう</rt></ruby>＿＿＿。", options:["せざるを得ない","しずにはいられない","しないわけにはいかない","してならない"], answer:0, grammar:"ざるを得ない", explanation:"不得不改变经营方针。する→「せざるを得ない」是特殊变化。"},
    {q:"<ruby>明日<rt>あした</rt></ruby>の<ruby>面接<rt>めんせつ</rt></ruby>でうまく<ruby>話<rt>はな</rt></ruby>せるかどうか<ruby>心配<rt>しんぱい</rt></ruby>で＿＿＿。", options:["たまらない","ざるを得ない","わけにはいかない","ずにはいられない"], answer:0, grammar:"てたまらない", explanation:"非常担心——强烈的情感用「でたまらない」。和「てならない」都可以。"},
    {q:"この<ruby>曲<rt>きょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>くと<ruby>体<rt>からだ</rt></ruby>を<ruby>動<rt>うご</rt></ruby>かさ＿＿＿。", options:["ざるを得ない","ないわけにはいかない","てしょうがない","ずにはいられない"], answer:3, grammar:"ずにはいられない", explanation:"听到音乐忍不住动起来，「ずにはいられない」表示情不自禁。"},
    {q:"こんなに<ruby>歯<rt>は</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>くなっては、<ruby>病院<rt>びょういん</rt></ruby>に<ruby>行<rt>い</rt></ruby>かない＿＿＿。", options:["ずにはいられない","ものか","わけにはいかない","てならない"], answer:2, grammar:"ないわけにはいかない", explanation:"牙痛成这样不能不去医院——心理上必须做用「ないわけにはいかない」。"},
    {q:"<ruby>週末<rt>しゅうまつ</rt></ruby>も<ruby>仕事<rt>しごと</rt></ruby>で<ruby>出<rt>で</rt></ruby>かけ＿＿＿。", options:["ずにはいられない","ないわけにはいかない","ざるを得ない","てしょうがない"], answer:2, grammar:"ざるを得ない", explanation:"因为工作不得不出门——被迫/无奈用「ざるを得ない」。书面语。"}
  ]
},

"Day25": {
  title: "第26課 语法（语气表达・感叹・愿望）",
  grammar: [
    {
      name: "〜たいものだ",
      meaning: "真想…啊（强烈愿望，自己想做）",
      structure: "動詞連用形＋たいものだ",
      examples: [
        {jp:"<ruby>将来<rt>しょうらい</rt></ruby>はこんな<ruby>家<rt>いえ</rt></ruby>に<ruby>住<rt>す</rt></ruby>みたいものだ。", cn:"将来真想住这样的房子啊。"},
        {jp:"いつか<ruby>世界<rt>せかい</rt></ruby><ruby>一周<rt>いっしゅう</rt></ruby><ruby>旅行<rt>りょこう</rt></ruby>をしたいものだ。", cn:"真想有一天环游世界啊。"}
      ],
      keyPoint: "「ものだ」加强语气，表达说话者内心的强烈愿望 ✨"
    },
    {
      name: "〜てほしいものだ",
      meaning: "真希望（别人）能…啊",
      structure: "動詞て形＋ほしいものだ",
      examples: [
        {jp:"<ruby>今度<rt>こんど</rt></ruby>こそ、<ruby>実験<rt>じっけん</rt></ruby>が<ruby>成功<rt>せいこう</rt></ruby>してほしいものだ。", cn:"这次实验一定要成功啊。"},
        {jp:"<ruby>子<rt>こ</rt></ruby>どもたちには<ruby>元気<rt>げんき</rt></ruby>に<ruby>育<rt>そだ</rt></ruby>ってほしいものだ。", cn:"真希望孩子们能健康成长。"}
      ],
      keyPoint: "たいものだ=自己想做，てほしいものだ=希望别人做。主语不同！👆"
    },
    {
      name: "〜たものだ",
      meaning: "以前常常…啊（怀念过去的习惯）",
      structure: "動詞た形＋ものだ",
      examples: [
        {jp:"<ruby>子供<rt>こども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>、<ruby>夏<rt>なつ</rt></ruby>になるとこの<ruby>川<rt>かわ</rt></ruby>で<ruby>泳<rt>およ</rt></ruby>いだものだ。", cn:"小时候一到夏天就常在这条河游泳。"},
        {jp:"<ruby>学生<rt>がくせい</rt></ruby><ruby>時代<rt>じだい</rt></ruby>はよく<ruby>徹夜<rt>てつや</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>したものだ。", cn:"学生时代经常通宵学习啊。"}
      ],
      keyPoint: "考试重点！常和「よく」「いつも」搭配，表示反复发生的过去习惯（怀念语气）⭐⭐⭐"
    },
    {
      name: "〜ないものか",
      meaning: "难道不能…吗（强烈愿望/想方设法）",
      structure: "動詞ない形＋ものか",
      examples: [
        {jp:"<ruby>母<rt>はは</rt></ruby>の<ruby>病気<rt>びょうき</rt></ruby>が<ruby>治<rt>なお</rt></ruby>らないものか。", cn:"妈妈的病能不能好啊…"},
        {jp:"この<ruby>時計<rt>とけい</rt></ruby>をもっと<ruby>安<rt>やす</rt></ruby>く<ruby>買<rt>か</rt></ruby>えないものか。", cn:"这块表能不能更便宜买到呢。"}
      ],
      keyPoint: "考试重点！表面是疑问但实际是强烈愿望——「真希望能…」⭐⭐⭐"
    },
    {
      name: "〜ものがある",
      meaning: "有…的感觉/令人感到…",
      structure: "動詞普通形／ナ形容詞な＋ものがある",
      examples: [
        {jp:"<ruby>毎日<rt>まいにち</rt></ruby>2<ruby>時間<rt>じかん</rt></ruby>も<ruby>通勤<rt>つうきん</rt></ruby>するのは<ruby>辛<rt>つら</rt></ruby>いものがある。", cn:"每天通勤2小时真够辛苦的。"},
        {jp:"<ruby>彼<rt>かれ</rt></ruby>の<ruby>演奏<rt>えんそう</rt></ruby>には<ruby>心<rt>こころ</rt></ruby>を<ruby>動<rt>うご</rt></ruby>かされるものがある。", cn:"他的演奏有打动人心的力量。"}
      ],
      keyPoint: "表示某种感觉/倾向确实存在，语气比直接说更含蓄 🎵"
    },
    {
      name: "〜ことだ／ことか（感叹）",
      meaning: "多么…啊！（强烈感叹）",
      structure: "イ形／ナ形＋ことだ／ことか",
      examples: [
        {jp:"<ruby>困<rt>こま</rt></ruby>った<ruby>時<rt>とき</rt></ruby>に<ruby>助<rt>たす</rt></ruby>けてくれる<ruby>友達<rt>ともだち</rt></ruby>がいるなんて、ありがたいことだ。", cn:"困难时有朋友帮忙，真是太感谢了。"},
        {jp:"ご<ruby>両親<rt>りょうしん</rt></ruby>はどんなに<ruby>心配<rt>しんぱい</rt></ruby>していることか。", cn:"父母该有多担心啊。"}
      ],
      keyPoint: "ことか常和「どんなに」「なんと」搭配，语气更强烈 😢"
    }
  ],
  questions: [
    {q:"<ruby>子供<rt>こども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>、<ruby>夏<rt>なつ</rt></ruby>になるとこの<ruby>川<rt>かわ</rt></ruby>で<ruby>泳<rt>およ</rt></ruby>いだ＿＿＿。", options:["ことだ","ものだ","ものか","ものがある"], answer:1, grammar:"たものだ", explanation:"怀念小时候夏天常游泳的习惯，用「たものだ」表示对过去的怀念。"},
    {q:"<ruby>母<rt>はは</rt></ruby>の<ruby>病気<rt>びょうき</rt></ruby>が<ruby>治<rt>なお</rt></ruby>らない＿＿＿。", options:["ものだ","ことだ","ものか","ものがある"], answer:2, grammar:"ないものか", explanation:"「妈妈的病能不能好呢」——强烈愿望用「ないものか」。"},
    {q:"<ruby>将来<rt>しょうらい</rt></ruby>はこんな<ruby>家<rt>いえ</rt></ruby>に<ruby>住<rt>す</rt></ruby>み＿＿＿。", options:["たものだ","たいものだ","ないものか","ものがある"], answer:1, grammar:"たいものだ", explanation:"「真想住这样的房子」——自己的强烈愿望用「たいものだ」。"},
    {q:"ご<ruby>両親<rt>りょうしん</rt></ruby>はどんなに<ruby>心配<rt>しんぱい</rt></ruby>している＿＿＿。", options:["ものだ","ことか","ものか","ものがある"], answer:1, grammar:"ことか", explanation:"「父母该有多担心啊」——和「どんなに」搭配表强烈感叹用「ことか」。"},
    {q:"<ruby>毎日<rt>まいにち</rt></ruby>2<ruby>時間<rt>じかん</rt></ruby>も<ruby>通勤<rt>つうきん</rt></ruby>するのは<ruby>辛<rt>つら</rt></ruby>い＿＿＿。", options:["ものだ","ことだ","ものか","ものがある"], answer:3, grammar:"ものがある", explanation:"每天通勤2小时「令人觉得辛苦」——表示某种感觉用「ものがある」。"},
    {q:"<ruby>学生<rt>がくせい</rt></ruby><ruby>時代<rt>じだい</rt></ruby>はよく<ruby>徹夜<rt>てつや</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>した＿＿＿。", options:["ことだ","たいものだ","ものだ","ものがある"], answer:2, grammar:"たものだ", explanation:"怀念学生时代常通宵学习，「よく」+「たものだ」是经典搭配。"},
    {q:"<ruby>今度<rt>こんど</rt></ruby>こそ、<ruby>実験<rt>じっけん</rt></ruby>が<ruby>成功<rt>せいこう</rt></ruby>して＿＿＿。", options:["たいものだ","ほしいものだ","たものだ","ないものか"], answer:1, grammar:"てほしいものだ", explanation:"「真希望实验能成功」——希望他人/事情达成用「てほしいものだ」。"},
    {q:"この<ruby>時計<rt>とけい</rt></ruby>をもっと<ruby>安<rt>やす</rt></ruby>く<ruby>買<rt>か</rt></ruby>えない＿＿＿。", options:["ものだ","ことだ","ものか","ものがある"], answer:2, grammar:"ないものか", explanation:"「能不能更便宜买到呢」——想方设法实现的强烈愿望用「ないものか」。"},
    {q:"<ruby>困<rt>こま</rt></ruby>った<ruby>時<rt>とき</rt></ruby>に<ruby>助<rt>たす</rt></ruby>けてくれる<ruby>友達<rt>ともだち</rt></ruby>がいるなんて、ありがたい＿＿＿。", options:["ものだ","ことだ","ものか","ものがある"], answer:1, grammar:"ことだ", explanation:"「有朋友帮忙真是太感谢了」——强烈感叹用「ことだ」。"}
  ]
}
};
