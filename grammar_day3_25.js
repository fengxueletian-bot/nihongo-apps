// ============ Day3 ~ Day25 语法数据 ============
// 基于周业繁老师B站N2语法课程笔记生成
// 第4課～第26課（第9課和第21課笔记缺失，用教材标准内容补充）
// 格式兼容 DAILY_DATA，可直接合并

const DAILY_DATA_EXT = {

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
}

};

// 导出
if (typeof module !== 'undefined') module.exports = DAILY_DATA_EXT;
