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

,

"Day10": {
  title: "第11課 语法（不受限/不顾/暂且不提）",
  grammar: [
    {
      name: "〜に関わりなく",
      meaning: "与…无关（不受某因素影响）",
      structure: "名詞＋に関わりなく",
      examples: [
        {jp:"<ruby>路線<rt>ろせん</rt></ruby>バスの<ruby>料金<rt>りょうきん</rt></ruby>は<ruby>乗<rt>の</rt></ruby>った<ruby>距離<rt>きょり</rt></ruby>に<ruby>関<rt>かか</rt></ruby>わりなく<ruby>一律<rt>いちりつ</rt></ruby>200<ruby>円<rt>えん</rt></ruby>です。", cn:"公交车费与乘坐距离无关，统一200日元。"},
        {jp:"<ruby>送金<rt>そうきん</rt></ruby><ruby>手数料<rt>てすうりょう</rt></ruby>は<ruby>送金<rt>そうきん</rt></ruby><ruby>金額<rt>きんがく</rt></ruby>に<ruby>関<rt>かか</rt></ruby>わりなく<ruby>無料<rt>むりょう</rt></ruby>です。", cn:"汇款手续费与汇款金额无关，免费。"}
      ],
      keyPoint: "与〜を問わず意思相近但更书面。注意不要和「にもかかわらず」搞混！⚠️",
      confusion: "vs にもかかわらず：に関わりなく=与…无关（不受影响），にもかかわらず=尽管…仍…（转折）",
      comparison: {pair:"に関わりなく vs にもかかわらず", rows:[["与…无关","尽管…仍…"],["距離に関わりなく一律","雨にもかかわらず出発"],["与距离无关统一价","尽管下雨仍出发"],["不受因素影响","转折让步"]]}
    },
    {
      name: "〜も構わず",
      meaning: "不顾…（无视某种情况或他人感受）",
      structure: "名詞＋も構わず",
      examples: [
        {jp:"<ruby>他人<rt>たにん</rt></ruby>の<ruby>目<rt>め</rt></ruby>も<ruby>構<rt>かま</rt></ruby>わず<ruby>道<rt>みち</rt></ruby>で<ruby>大泣<rt>おおな</rt></ruby>きしている<ruby>人<rt>ひと</rt></ruby>を<ruby>見<rt>み</rt></ruby>かけた。", cn:"看到一个不顾他人目光在路边大哭的人。"},
        {jp:"<ruby>彼<rt>かれ</rt></ruby>は<ruby>値段<rt>ねだん</rt></ruby>も<ruby>構<rt>かま</rt></ruby>わず<ruby>好<rt>す</rt></ruby>きな<ruby>料理<rt>りょうり</rt></ruby>をどんどん<ruby>注文<rt>ちゅうもん</rt></ruby>した。", cn:"他不顾价格不停地点喜欢的菜。"}
      ],
      keyPoint: "「構う」=介意/顾及，加否定变成不顾。常搭配：他人の目・値段・時間 😤",
      confusion: "vs を問わず：も構わず带主观「不顾」的语气，を問わず是客观「不论」",
      comparison: {pair:"も構わず vs を問わず", rows:[["不顾（主观无视）","不论（客观不限）"],["他人の目も構わず","性別を問わず"],["不顾他人目光","不论性别"],["带任性/无视语气","中性客观"]]}
    },
    {
      name: "〜はともかく",
      meaning: "…暂且不提/姑且不论（先搁置再说重要的）",
      structure: "名詞＋はともかく",
      examples: [
        {jp:"この<ruby>店<rt>みせ</rt></ruby>は<ruby>雰囲気<rt>ふんいき</rt></ruby>はともかく、<ruby>料理<rt>りょうり</rt></ruby>の<ruby>味<rt>あじ</rt></ruby>は<ruby>最高<rt>さいこう</rt></ruby>だ。", cn:"这家店氛围暂且不论，菜品味道非常好。"},
        {jp:"<ruby>外<rt>そと</rt></ruby>ではともかく、<ruby>家<rt>いえ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>ではタバコを<ruby>吸<rt>す</rt></ruby>わないでください。", cn:"外面姑且不论，在家里请不要抽烟。"}
      ],
      keyPoint: "先搁置不重要的A，再说重要的B 🤷",
      confusion: "vs はさておき：意思几乎一样，はさておき更书面",
      comparison: {pair:"はともかく vs はさておき", rows:[["口语常用","书面正式"],["雰囲気はともかく","細かいことはさておき"],["氛围暂且不论","细节暂且不提"],["日常会话","正式场合"]]}
    },
    {
      name: "〜はさておき",
      meaning: "…暂且不提（更正式的「はともかく」）",
      structure: "名詞＋はさておき",
      examples: [
        {jp:"<ruby>飲<rt>の</rt></ruby>み<ruby>会<rt>かい</rt></ruby>の<ruby>細<rt>こま</rt></ruby>かいことはさておき、まず<ruby>場所<rt>ばしょ</rt></ruby>と<ruby>時間<rt>じかん</rt></ruby>を<ruby>決<rt>き</rt></ruby>めよう。", cn:"聚会细节暂且不提，先决定地点和时间吧。"},
        {jp:"どんな<ruby>家<rt>いえ</rt></ruby>がいいかはさておき、どんな<ruby>地域<rt>ちいき</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>したいかを<ruby>考<rt>かんが</rt></ruby>えよう。", cn:"什么房子好暂且不论，先考虑想搬到哪个区域。"}
      ],
      keyPoint: "考试中两者不区分，会认就行 📝",
      confusion: "和はともかく考试不区分",
      comparison: {pair:"はさておき的使用", rows:[["先搁置次要问题","再讨论核心问题"],["細かいことはさておき","場所を決めよう"],["细节暂放","先定地点"]]}
    }
  ],
  questions: [
    {q:"<ruby>料金<rt>りょうきん</rt></ruby>は<ruby>距離<rt>きょり</rt></ruby>＿＿＿<ruby>一律<rt>いちりつ</rt></ruby>500<ruby>円<rt>えん</rt></ruby>です。", options:["に関わりなく","にもかかわらず","も構わず","はともかく"], answer:0, grammar:"に関わりなく", explanation:"费用与距离无关统一500日元，不受某因素影响用「に関わりなく」。"},
    {q:"<ruby>雨<rt>あめ</rt></ruby>＿＿＿、<ruby>試合<rt>しあい</rt></ruby>は<ruby>予定<rt>よてい</rt></ruby><ruby>通<rt>どお</rt></ruby>り<ruby>行<rt>おこな</rt></ruby>われた。", options:["に関わりなく","にもかかわらず","も構わず","はともかく"], answer:1, grammar:"にもかかわらず", explanation:"尽管下雨比赛仍按计划举行，转折让步用「にもかかわらず」。"},
    {q:"<ruby>彼<rt>かれ</rt></ruby>は<ruby>周囲<rt>しゅうい</rt></ruby>の<ruby>反対<rt>はんたい</rt></ruby>＿＿＿、<ruby>会社<rt>かいしゃ</rt></ruby>を<ruby>辞<rt>や</rt></ruby>めた。", options:["に関わりなく","にもかかわらず","も構わず","はともかく"], answer:2, grammar:"も構わず", explanation:"不顾周围反对辞了职，主观无视用「も構わず」。"},
    {q:"<ruby>味<rt>あじ</rt></ruby>＿＿＿、<ruby>見<rt>み</rt></ruby>た<ruby>目<rt>め</rt></ruby>がきれいなので<ruby>買<rt>か</rt></ruby>った。", options:["に関わりなく","にもかかわらず","も構わず","はともかく"], answer:3, grammar:"はともかく", explanation:"味道暂且不论外观好看就买了，先搁置次要问题用「はともかく」。"},
    {q:"<ruby>天候<rt>てんこう</rt></ruby>＿＿＿、イベントは<ruby>開催<rt>かいさい</rt></ruby>します。", options:["に関わりなく","にもかかわらず","も構わず","はともかく"], answer:0, grammar:"に関わりなく", explanation:"与天气无关活动照常举办，不受因素影响用「に関わりなく」。"},
    {q:"<ruby>人<rt>ひと</rt></ruby>を<ruby>待<rt>ま</rt></ruby>たせているの＿＿＿、まだ<ruby>鏡<rt>かがみ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>で<ruby>化粧<rt>けしょう</rt></ruby>している。", options:["に関わりなく","にもかかわらず","も構わず","はともかく"], answer:2, grammar:"も構わず", explanation:"不顾让人等着还在化妆，无视他人用「も構わず」。"},
    {q:"<ruby>細<rt>こま</rt></ruby>かいこと＿＿＿、まず<ruby>日程<rt>にってい</rt></ruby>を<ruby>決<rt>き</rt></ruby>めましょう。", options:["に関わりなく","にもかかわらず","も構わず","はさておき"], answer:3, grammar:"はさておき", explanation:"细节暂且不提先定日程，搁置次要问题用「はさておき」。"},
    {q:"このアルバイトは<ruby>経験<rt>けいけん</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>＿＿＿<ruby>応募<rt>おうぼ</rt></ruby>できる。", options:["に関わりなく","を問わず","も構わず","はともかく"], answer:1, grammar:"を問わず", explanation:"不论有无经验都可应聘，不限条件用「を問わず」。注意与「に関わりなく」的区分。"}
  ]
},

"Day11": {
  title: "第12課 语法（否定表达体系）",
  grammar: [
    {
      name: "〜わけがない",
      meaning: "绝对不可能（完全否定）",
      structure: "動詞／形容詞普通形＋わけがない",
      examples: [
        {jp:"<ruby>田中<rt>たなか</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の<ruby>試験<rt>しけん</rt></ruby>がそんなに<ruby>簡単<rt>かんたん</rt></ruby>なわけがない。", cn:"田中老师的考试不可能那么简单。"},
        {jp:"<ruby>一人<rt>ひとり</rt></ruby>でできるわけがありません。", cn:"一个人绝对做不完。"}
      ],
      keyPoint: "口语可简化为「わけない」。基于逻辑的必然否定 🚫",
      confusion: "vs はずがない：わけがない=逻辑否定（不可能），はずがない=推测否定（不应该）",
      comparison: {pair:"わけがない vs はずがない", rows:[["逻辑否定","推测否定"],["绝对不可能","不应该/按理不会"],["簡単なわけがない","簡単なはずがない"],["不可能简单（断定）","按理不会简单（推测）"]]}
    },
    {
      name: "〜わけではない",
      meaning: "并非…（部分否定，有例外）",
      structure: "動詞／形容詞普通形＋わけではない",
      examples: [
        {jp:"<ruby>電話<rt>でんわ</rt></ruby>に<ruby>出<rt>で</rt></ruby>られるわけではない。", cn:"并非随时都能接电话。"},
        {jp:"<ruby>嫌<rt>きら</rt></ruby>いなわけではないけど、<ruby>今日<rt>きょう</rt></ruby>はちょっと…", cn:"并不是不喜欢，但今天有点…"}
      ],
      keyPoint: "部分否定！隐含「有时行有时不行」的意思 🔀",
      confusion: "vs わけがない：わけではない=部分否定（并非总是），わけがない=完全否定（绝不可能）",
      comparison: {pair:"わけではない vs わけがない", rows:[["部分否定","完全否定"],["并非总是…","绝对不可能"],["出られるわけではない","出られるわけがない"],["并非随时能接（有时能）","绝不可能接（完全不能）"]]}
    },
    {
      name: "〜どころではない",
      meaning: "远非…/岂止…/根本没余裕…",
      structure: "名詞／動詞辞書形＋どころではない",
      examples: [
        {jp:"ただの<ruby>風邪<rt>かぜ</rt></ruby>どころではなく、<ruby>肺炎<rt>はいえん</rt></ruby>だった。", cn:"不只是感冒，而是肺炎。"},
        {jp:"<ruby>休日<rt>きゅうじつ</rt></ruby>の<ruby>道<rt>みち</rt></ruby>はちょっと<ruby>混<rt>こ</rt></ruby>むどころではなかった。", cn:"休息日的道路岂止有点堵。"}
      ],
      keyPoint: "否定前面说的程度，实际情况更严重！先否定轻的→再说重的 ⬆️",
      confusion: "vs どころか：どころではない=程度更严重，どころか=不但A反而B",
      comparison: {pair:"どころではない vs どころか", rows:[["程度更严重","不但A反而B"],["風邪どころではなく肺炎","風邪どころか元気だ"],["不只是感冒是肺炎","别说感冒了很健康"],["否定程度轻","否定整个前提"]]}
    },
    {
      name: "〜ものか",
      meaning: "怎么可能…（口语强烈否定）",
      structure: "動詞普通形＋ものか",
      examples: [
        {jp:"<ruby>山田<rt>やまだ</rt></ruby>さんが<ruby>時間通<rt>じかんどお</rt></ruby>りに<ruby>来<rt>く</rt></ruby>るものか。", cn:"山田怎么可能按时来。"},
        {jp:"こんな<ruby>不便<rt>ふべん</rt></ruby>なところに<ruby>住<rt>す</rt></ruby>めるものか。", cn:"这么不方便的地方怎么可能住。"}
      ],
      keyPoint: "女性常用「もんか」，带轻蔑或怀疑语气 💢",
      confusion: "形式上没有否定词ない，但表达的是强烈否定",
      comparison: {pair:"四种否定表达", rows:[["わけがない","わけではない","どころではない","ものか"],["绝对不可能","并非总是","远非/岂止","怎么可能"],["完全否定","部分否定","程度否定","口语否定"]]}
    }
  ],
  questions: [
    {q:"<ruby>彼<rt>かれ</rt></ruby>がそんなことをする＿＿＿。", options:["わけがない","わけではない","どころではない","ものか"], answer:0, grammar:"わけがない", explanation:"他绝对不可能做那种事，完全否定用「わけがない」。"},
    {q:"<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>だからといって、<ruby>何<rt>なん</rt></ruby>でも<ruby>分<rt>わ</rt></ruby>かる＿＿＿。", options:["わけがない","わけではない","どころではない","ものか"], answer:1, grammar:"わけではない", explanation:"日语好不代表什么都懂，部分否定用「わけではない」。"},
    {q:"ただの<ruby>風邪<rt>かぜ</rt></ruby>＿＿＿、<ruby>肺炎<rt>はいえん</rt></ruby>だった。", options:["わけがなく","わけではなく","どころではなく","ものか"], answer:2, grammar:"どころではなく", explanation:"不只是感冒是肺炎，程度更严重用「どころではなく」。"},
    {q:"あんな<ruby>失礼<rt>しつれい</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>に<ruby>謝<rt>あやま</rt></ruby>る＿＿＿。", options:["わけがない","わけではない","どころではない","ものか"], answer:3, grammar:"ものか", explanation:"怎么可能向那么无礼的人道歉，口语强烈否定用「ものか」。"},
    {q:"<ruby>嫌<rt>きら</rt></ruby>いな＿＿＿けど、<ruby>今日<rt>きょう</rt></ruby>は<ruby>食<rt>た</rt></ruby>べたくない。", options:["わけがない","わけではない","どころではない","ものか"], answer:1, grammar:"わけではない", explanation:"并不是讨厌只是今天不想吃，部分否定用「わけではない」。"},
    {q:"<ruby>忙<rt>いそが</rt></ruby>しくて<ruby>旅行<rt>りょこう</rt></ruby>＿＿＿。", options:["わけがない","わけではない","どころではない","ものか"], answer:2, grammar:"どころではない", explanation:"忙得根本没余裕旅行，完全没有余裕用「どころではない」。"},
    {q:"こんな<ruby>高<rt>たか</rt></ruby>いもの<ruby>買<rt>か</rt></ruby>える＿＿＿よ。", options:["わけがない","わけではない","どころではない","ものか"], answer:3, grammar:"ものか", explanation:"这么贵的东西怎么可能买得起，口语强烈否定用「ものか」。"},
    {q:"コツコツ<ruby>努力<rt>どりょく</rt></ruby>すれば、<ruby>合格<rt>ごうかく</rt></ruby>できない＿＿＿。", options:["わけがない","わけではない","どころではない","ものか"], answer:0, grammar:"わけがない", explanation:"踏踏实实努力的话不可能考不过，双重否定=肯定。逻辑必然用「わけがない」。"}
  ]
},

"Day12": {
  title: "第13課 语法（とは/といえば/というと/となると）",
  grammar: [
    {
      name: "〜とは",
      meaning: "所谓的…是指…（定义解释）",
      structure: "名詞＋とは",
      examples: [
        {jp:"<ruby>公正<rt>こうせい</rt></ruby>とはどういう<ruby>意味<rt>いみ</rt></ruby>ですか。", cn:"所谓的公正是什么意思？"},
        {jp:"<ruby>人生<rt>じんせい</rt></ruby>とは<ruby>本人<rt>ほんにん</rt></ruby>が<ruby>主役<rt>しゅやく</rt></ruby>のドラマみたいなものだ。", cn:"所谓人生就像自己主演的电视剧。"}
      ],
      keyPoint: "正式定义解释，多用于学术/专业场景 📖",
      confusion: "vs という：とは更正式，多用于下定义",
      comparison: {pair:"とは vs という", rows:[["正式下定义","一般引用"],["公正とは…","公正というのは…"],["所谓公正是…","公正这个东西是…"]]}
    },
    {
      name: "〜といえば",
      meaning: "说到…（话题联想转换）",
      structure: "名詞＋といえば",
      examples: [
        {jp:"ハワイといえば、<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>結婚式<rt>けっこんしき</rt></ruby>をするそうです。", cn:"说到夏威夷，听说佐藤要在那里办婚礼。"},
        {jp:"<ruby>夏<rt>なつ</rt></ruby>といえば、やっぱり<ruby>花火<rt>はなび</rt></ruby>ですね。", cn:"说到夏天，果然是烟花呢。"}
      ],
      keyPoint: "话题跳转的连接器！前后有隐性关联 🔗",
      confusion: "vs というと：といえば=联想，というと=确认/反应",
      comparison: {pair:"といえば vs というと", rows:[["话题联想","确认反应"],["ハワイといえば結婚式","ハワイというと海?"],["说到夏威夷→婚礼","夏威夷→你是说大海?"]]}
    },
    {
      name: "〜のこととなると",
      meaning: "一涉及到…就…（态度大变）",
      structure: "名詞＋のこととなると",
      examples: [
        {jp:"<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>好<rt>す</rt></ruby>きな<ruby>歌手<rt>かしゅ</rt></ruby>のこととなると、<ruby>話<rt>はなし</rt></ruby>が<ruby>止<rt>と</rt></ruby>まらない。", cn:"一说到喜欢的歌手，佐藤就说个不停。"},
        {jp:"<ruby>酒<rt>さけ</rt></ruby>となると、<ruby>人<rt>ひと</rt></ruby>が<ruby>変<rt>か</rt></ruby>わったように<ruby>元気<rt>げんき</rt></ruby>になる。", cn:"一提到酒整个人就变得特别精神。"}
      ],
      keyPoint: "平时不这样，唯独在这个话题上态度大转变！🔄",
      confusion: "后句必须描述与平时不同的特殊反应",
      comparison: {pair:"となると的两种理解", rows:[["话题转变","条件假设"],["酒となると元気になる","合格となると喜ぶ"],["一说到酒就精神","如果合格的话会高兴"]]}
    },
    {
      name: "〜と言ったら",
      meaning: "…简直太…了（极端程度感叹）",
      structure: "名詞＋と言ったら",
      examples: [
        {jp:"<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>り<ruby>前<rt>まえ</rt></ruby>の<ruby>忙<rt>いそが</rt></ruby>しさと<ruby>言<rt>い</rt></ruby>ったら、<ruby>君<rt>きみ</rt></ruby>には<ruby>想像<rt>そうぞう</rt></ruby>もできない。", cn:"截止日前忙碌的程度，你根本想象不到。"},
        {jp:"<ruby>富士山<rt>ふじさん</rt></ruby>の<ruby>景色<rt>けしき</rt></ruby>と<ruby>言<rt>い</rt></ruby>ったら、<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>すだけで<ruby>感動<rt>かんどう</rt></ruby>する。", cn:"富士山的景色简直太美了，光回想就感动。"}
      ],
      keyPoint: "强调程度达到极限，常搭配「想像もできない」「言葉にならない」😲",
      confusion: "vs といえば：と言ったら=程度感叹，といえば=话题联想",
      comparison: {pair:"と言ったら vs といえば", rows:[["极端程度感叹","话题联想"],["忙しさと言ったら","夏といえば"],["忙碌程度简直了","说到夏天"]]}
    }
  ],
  questions: [
    {q:"<ruby>教育<rt>きょういく</rt></ruby>＿＿＿<ruby>何<rt>なに</rt></ruby>か。<ruby>一言<rt>ひとこと</rt></ruby>では<ruby>言<rt>い</rt></ruby>えない。", options:["とは","といえば","となると","と言ったら"], answer:0, grammar:"とは", explanation:"所谓教育是什么，正式定义解释用「とは」。"},
    {q:"<ruby>日本<rt>にほん</rt></ruby>＿＿＿、<ruby>桜<rt>さくら</rt></ruby>が<ruby>思<rt>おも</rt></ruby>い<ruby>浮<rt>う</rt></ruby>かびますね。", options:["とは","といえば","となると","と言ったら"], answer:1, grammar:"といえば", explanation:"说到日本就想到樱花，话题联想用「といえば」。"},
    {q:"<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>料理<rt>りょうり</rt></ruby>のこと＿＿＿、<ruby>急<rt>きゅう</rt></ruby>に<ruby>目<rt>め</rt></ruby>が<ruby>輝<rt>かがや</rt></ruby>く。", options:["とは","といえば","となると","と言ったら"], answer:2, grammar:"となると", explanation:"一涉及到料理就眼睛发亮，态度大变用「のこととなると」。"},
    {q:"この<ruby>暑<rt>あつ</rt></ruby>さ＿＿＿、もう<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>で</rt></ruby>たくない。", options:["とは","といえば","となると","と言ったら"], answer:3, grammar:"と言ったら", explanation:"这热度简直了不想出门，极端程度感叹用「と言ったら」。"},
    {q:"「<ruby>働<rt>はたら</rt></ruby>き<ruby>方<rt>かた</rt></ruby><ruby>改革<rt>かいかく</rt></ruby>」＿＿＿<ruby>何<rt>なん</rt></ruby>ですか。", options:["とは","といえば","となると","と言ったら"], answer:0, grammar:"とは", explanation:"所谓工作方式改革是什么，定义解释用「とは」。"},
    {q:"<ruby>旅行<rt>りょこう</rt></ruby>＿＿＿、<ruby>来月<rt>らいげつ</rt></ruby><ruby>北海道<rt>ほっかいどう</rt></ruby>に<ruby>行<rt>い</rt></ruby>くんだけど。", options:["とは","といえば","となると","と言ったら"], answer:1, grammar:"といえば", explanation:"说到旅行下个月要去北海道，话题联想用「といえば」。"},
    {q:"<ruby>子供<rt>こども</rt></ruby>のこと＿＿＿、<ruby>普段<rt>ふだん</rt></ruby><ruby>冷静<rt>れいせい</rt></ruby>な<ruby>母<rt>はは</rt></ruby>も<ruby>感情的<rt>かんじょうてき</rt></ruby>になる。", options:["とは","といえば","となると","と言ったら"], answer:2, grammar:"となると", explanation:"一涉及到孩子的事平时冷静的妈妈也变感性，态度大变用「となると」。"},
    {q:"あの<ruby>映画<rt>えいが</rt></ruby>の<ruby>感動<rt>かんどう</rt></ruby>＿＿＿、<ruby>言葉<rt>ことば</rt></ruby>にならない。", options:["とは","といえば","となると","と言ったら"], answer:3, grammar:"と言ったら", explanation:"那部电影的感动简直无法用言语形容，极端程度用「と言ったら」。"}
  ]
},

"Day13": {
  title: "第14課 语法（转折表达体系）",
  grammar: [
    {
      name: "〜にもかかわらず",
      meaning: "尽管…仍然…（强烈转折）",
      structure: "普通形＋にもかかわらず",
      examples: [
        {jp:"<ruby>天気<rt>てんき</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>いにもかかわらず、<ruby>工事<rt>こうじ</rt></ruby>は<ruby>続<rt>つづ</rt></ruby>けている。", cn:"尽管天气不好，工程仍在继续。"},
        {jp:"<ruby>足<rt>あし</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>いにもかかわらず、マラソンを<ruby>完走<rt>かんそう</rt></ruby>した。", cn:"尽管脚疼仍跑完了马拉松。"}
      ],
      keyPoint: "N2高频转折！比「のに」更正式 💪",
      confusion: "vs のに：にもかかわらず更书面正式，のに更口语化",
      comparison: {pair:"にもかかわらず vs のに", rows:[["书面正式","口语日常"],["天気が悪いにもかかわらず","天気が悪いのに"],["尽管天气不好（正式）","明明天气不好（口语）"]]}
    },
    {
      name: "〜ものの",
      meaning: "虽然…但是…（后接消极结果）",
      structure: "動詞普通形／形容詞＋ものの",
      examples: [
        {jp:"<ruby>高<rt>たか</rt></ruby>い<ruby>和服<rt>わふく</rt></ruby>を<ruby>買<rt>か</rt></ruby>ったものの、<ruby>着<rt>き</rt></ruby>る<ruby>機会<rt>きかい</rt></ruby>がない。", cn:"虽然买了贵的和服，但没有机会穿。"},
        {jp:"<ruby>運転<rt>うんてん</rt></ruby><ruby>免許<rt>めんきょ</rt></ruby>は<ruby>取<rt>と</rt></ruby>ったものの、ほとんど<ruby>運転<rt>うんてん</rt></ruby>していない。", cn:"虽然考了驾照，但几乎没开过车。"}
      ],
      keyPoint: "后面通常接消极/遗憾的结果 😔",
      confusion: "vs とはいえ：ものの后接消极结果，とはいえ后接意外结果",
      comparison: {pair:"ものの vs とはいえ", rows:[["虽然…但（消极）","虽说…但（意外）"],["買ったものの着ない","春とはいえまだ寒い"],["买了却没穿（遗憾）","虽说是春天还挺冷（意外）"]]}
    },
    {
      name: "〜ながら（も）（转折）",
      meaning: "虽然…但是…（与「一边…一边…」同形异义）",
      structure: "動詞マス形／イ形容詞＋ながら（も）",
      examples: [
        {jp:"<ruby>狭<rt>せま</rt></ruby>いながらも、<ruby>庭<rt>にわ</rt></ruby>がある。", cn:"虽然狭窄，但有院子。"},
        {jp:"<ruby>知<rt>し</rt></ruby>っていながら、<ruby>教<rt>おし</rt></ruby>えてくれなかった。", cn:"虽然知道却不告诉我。"}
      ],
      keyPoint: "同一个「ながら」两种意思！加「も」时100%是转折 ⚡",
      confusion: "区分技巧：加「も」=转折，不加「も」看主语（同一主语=同时，不同=转折）",
      comparison: {pair:"ながら（同时）vs ながら（转折）", rows:[["一边…一边…","虽然…但是…"],["音楽を聴きながら勉強","知っていながら教えない"],["边听音乐边学习","虽然知道却不教"],["同一人同时做两件事","事实与行为矛盾"]]}
    },
    {
      name: "せっかく〜のに",
      meaning: "好不容易…却…（副词+语法固定搭配）",
      structure: "せっかく＋句子＋のに",
      examples: [
        {jp:"せっかく<ruby>来<rt>き</rt></ruby>たのに、<ruby>雨<rt>あめ</rt></ruby>で<ruby>帰<rt>かえ</rt></ruby>ることになった。", cn:"好不容易来了却因为下雨得回去。"},
        {jp:"せっかくの<ruby>休<rt>やす</rt></ruby>みなのに、<ruby>仕事<rt>しごと</rt></ruby>で<ruby>出<rt>で</rt></ruby>かけなければならない。", cn:"好不容易的休息日却得因工作出门。"}
      ],
      keyPoint: "N2高频考点！「せっかく」必搭配「のに」或「のだから」📝",
      confusion: "せっかく+のに=遗憾，せっかく+のだから=既然难得就应该…",
      comparison: {pair:"せっかく〜のに vs せっかく〜のだから", rows:[["好不容易…却（遗憾）","既然好不容易…就（珍惜）"],["来たのに帰る","来たのだから楽しもう"],["来了却回去（可惜）","既然来了就好好玩吧"]]}
    }
  ],
  questions: [
    {q:"<ruby>注意<rt>ちゅうい</rt></ruby>した＿＿＿、<ruby>全然<rt>ぜんぜん</rt></ruby><ruby>改善<rt>かいぜん</rt></ruby>されない。", options:["にもかかわらず","ものの","ながら","のに"], answer:0, grammar:"にもかかわらず", explanation:"尽管提醒了仍完全没改善，强烈转折用「にもかかわらず」。"},
    {q:"<ruby>資格<rt>しかく</rt></ruby>を<ruby>取<rt>と</rt></ruby>った＿＿＿、<ruby>活<rt>い</rt></ruby>かす<ruby>機会<rt>きかい</rt></ruby>がない。", options:["にもかかわらず","ものの","ながら","のに"], answer:1, grammar:"ものの", explanation:"虽然考了资格证但没机会用，后接消极结果用「ものの」。"},
    {q:"<ruby>狭<rt>せま</rt></ruby>い＿＿＿も、<ruby>庭<rt>にわ</rt></ruby>のある<ruby>家<rt>いえ</rt></ruby>に<ruby>住<rt>す</rt></ruby>みたい。", options:["にもかかわらず","ものの","ながら","のに"], answer:2, grammar:"ながら", explanation:"虽然狭窄但想住有院子的房子，形容词+ながらも=转折。"},
    {q:"せっかく<ruby>予約<rt>よやく</rt></ruby>した＿＿＿、<ruby>急<rt>きゅう</rt></ruby>に<ruby>仕事<rt>しごと</rt></ruby>が<ruby>入<rt>はい</rt></ruby>った。", options:["にもかかわらず","ものの","ながら","のに"], answer:3, grammar:"のに", explanation:"好不容易预约了却突然有工作，「せっかく〜のに」是固定搭配。"},
    {q:"<ruby>知<rt>し</rt></ruby>っている＿＿＿、<ruby>教<rt>おし</rt></ruby>えてくれなかった。", options:["にもかかわらず","ものの","ながら","のに"], answer:2, grammar:"ながら", explanation:"虽然知道却不告诉我，知道和不教矛盾，转折用「ながら」。"},
    {q:"さすが<ruby>専門家<rt>せんもんか</rt></ruby>＿＿＿、<ruby>説明<rt>せつめい</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かりやすい。", options:["だけあって","にもかかわらず","ものの","ながら"], answer:0, grammar:"だけあって", explanation:"不愧是专家说明浅显易懂，「さすが〜だけあって」是固定搭配。"},
    {q:"<ruby>春<rt>はる</rt></ruby>になった＿＿＿、まだ<ruby>寒<rt>さむ</rt></ruby>い<ruby>日<rt>ひ</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>いている。", options:["にもかかわらず","とはいえ","ながら","のに"], answer:1, grammar:"とはいえ", explanation:"虽说到了春天还是持续寒冷的日子，与预期相反用「とはいえ」。"},
    {q:"<ruby>体<rt>からだ</rt></ruby>が<ruby>弱<rt>よわ</rt></ruby>い＿＿＿、<ruby>毎日<rt>まいにち</rt></ruby>マラソンの<ruby>練習<rt>れんしゅう</rt></ruby>を<ruby>欠<rt>か</rt></ruby>かさない。", options:["にもかかわらず","ものの","ながら","のに"], answer:0, grammar:"にもかかわらず", explanation:"尽管体弱仍每天坚持练马拉松，强烈转折用「にもかかわらず」。"}
  ]
},

"Day14": {
  title: "第15課 语法（假设表达体系）",
  grammar: [
    {
      name: "〜ものなら（可能形）",
      meaning: "如果能…的话（想做但几乎不可能）",
      structure: "可能動詞辞書形＋ものなら",
      examples: [
        {jp:"<ruby>月<rt>つき</rt></ruby>へ<ruby>行<rt>い</rt></ruby>けるものなら、<ruby>行<rt>い</rt></ruby>きたいです。", cn:"如果能去月球的话，真想去。"},
        {jp:"<ruby>過去<rt>かこ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>れるものなら、もっと<ruby>勉強<rt>べんきょう</rt></ruby>したい。", cn:"如果能回到过去的话，想更努力学习。"}
      ],
      keyPoint: "可能形+ものなら→99%后面接「たい」！表达非现实的愿望 🌙",
      confusion: "vs ものなら（意向形）：可能形=积极愿望，意向形=消极预警",
      comparison: {pair:"ものなら两种接续", rows:[["可能形+ものなら","意向形+ものなら"],["如果能…就想…","如果敢…就会…"],["行けるものなら行きたい","行こうものなら怒られる"],["想去月球（积极愿望）","敢去就会被骂（消极预警）"]]}
    },
    {
      name: "〜ものなら（意向形）",
      meaning: "如果胆敢…就会…（消极预警）",
      structure: "動詞意向形＋ものなら",
      examples: [
        {jp:"<ruby>酒<rt>さけ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>もうものなら、<ruby>体<rt>からだ</rt></ruby>に<ruby>湿疹<rt>しっしん</rt></ruby>ができます。", cn:"一喝酒身上就起湿疹。"},
        {jp:"そんなことを<ruby>言<rt>い</rt></ruby>おうものなら、<ruby>大変<rt>たいへん</rt></ruby>なことになる。", cn:"如果说那种话就会很糟糕。"}
      ],
      keyPoint: "意向形+ものなら→后面接负面结果！⚠️",
      confusion: "注意区分可能形和意向形的ものなら，完全不同",
      comparison: {pair:"意向形ものなら的特征", rows:[["接续","后续","语气"],["動詞意向形（う/よう）","负面结果","预警/警告"],["飲もうものなら","湿疹ができる","一喝就起疹"]]}
    },
    {
      name: "〜なしには〜ない",
      meaning: "没有…就不…",
      structure: "名詞＋なしには＋否定",
      examples: [
        {jp:"ネットなしには、<ruby>現代<rt>げんだい</rt></ruby><ruby>社会<rt>しゃかい</rt></ruby>は<ruby>成立<rt>せいりつ</rt></ruby>しません。", cn:"没有网络现代社会无法成立。"},
        {jp:"<ruby>辞書<rt>じしょ</rt></ruby>なしには<ruby>新聞<rt>しんぶん</rt></ruby>が<ruby>読<rt>よ</rt></ruby>めない。", cn:"没有字典读不了报纸。"}
      ],
      keyPoint: "双重否定=强调必要性：没有A就没有B 🔑",
      confusion: "vs ないと：なしには更书面正式",
      comparison: {pair:"なしには vs ないと", rows:[["书面正式","口语常用"],["ネットなしには成立しない","ネットがないと成立しない"],["没有网络无法成立","没网就不行"]]}
    },
    {
      name: "〜としたら／とすれば",
      meaning: "如果假设…的话",
      structure: "普通形＋としたら／とすれば",
      examples: [
        {jp:"もし<ruby>百万円<rt>ひゃくまんえん</rt></ruby>あるとしたら、<ruby>何<rt>なに</rt></ruby>に<ruby>使<rt>つか</rt></ruby>いますか。", cn:"假如有一百万日元的话你会用来做什么？"},
        {jp:"<ruby>転職<rt>てんしょく</rt></ruby>するとすれば、いつがいいだろう。", cn:"假如要换工作的话什么时候好呢。"}
      ],
      keyPoint: "两者意思相同可互换，多用于非现实的假设 🤔",
      confusion: "vs たら：としたら强调假设性（非现实），たら通用",
      comparison: {pair:"としたら vs たら", rows:[["强调假设性","通用假设"],["百万円あるとしたら","百万円あったら"],["假如有百万（强调非现实）","有百万的话（普通假设）"]]}
    }
  ],
  questions: [
    {q:"<ruby>空<rt>そら</rt></ruby>を<ruby>飛<rt>と</rt></ruby>べる＿＿＿、<ruby>世界中<rt>せかいじゅう</rt></ruby>を<ruby>旅行<rt>りょこう</rt></ruby>したい。", options:["ものなら","としたら","なしには","ながら"], answer:0, grammar:"ものなら（可能形）", explanation:"如果能飞的话想环游世界，非现实愿望用可能形+「ものなら」。"},
    {q:"そんなことを<ruby>言<rt>い</rt></ruby>おう＿＿＿、みんなに<ruby>嫌<rt>きら</rt></ruby>われるだろう。", options:["ものなら","としたら","なしには","ながら"], answer:0, grammar:"ものなら（意向形）", explanation:"如果敢说那种话就会被大家讨厌，消极预警用意向形+「ものなら」。"},
    {q:"ネット＿＿＿<ruby>現代<rt>げんだい</rt></ruby><ruby>生活<rt>せいかつ</rt></ruby>は<ruby>考<rt>かんが</rt></ruby>えられない。", options:["ものなら","としたら","なしには","ながら"], answer:2, grammar:"なしには", explanation:"没有网络现代生活无法想象，强调必要性用「なしには」。"},
    {q:"もし<ruby>宝<rt>たから</rt></ruby>くじに<ruby>当<rt>あ</rt></ruby>たった＿＿＿、どうしますか。", options:["ものなら","としたら","なしには","ながら"], answer:1, grammar:"としたら", explanation:"假如中了彩票的话怎么办，非现实假设用「としたら」。"},
    {q:"<ruby>過去<rt>かこ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>れる＿＿＿、もっと<ruby>勉強<rt>べんきょう</rt></ruby>するのに。", options:["ものなら","としたら","なしには","ながら"], answer:0, grammar:"ものなら", explanation:"如果能回到过去的话想更努力学习，可能形+「ものなら」表达不可能实现的愿望。"},
    {q:"<ruby>酒<rt>さけ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>もう＿＿＿、すぐ<ruby>顔<rt>かお</rt></ruby>が<ruby>赤<rt>あか</rt></ruby>くなる。", options:["ものなら","としたら","なしには","ながら"], answer:0, grammar:"ものなら（意向形）", explanation:"一喝酒脸就变红，意向形+ものなら表示消极结果。"},
    {q:"<ruby>辞書<rt>じしょ</rt></ruby>＿＿＿この<ruby>論文<rt>ろんぶん</rt></ruby>は<ruby>読<rt>よ</rt></ruby>めない。", options:["ものなら","としたら","なしには","ながら"], answer:2, grammar:"なしには", explanation:"没有字典读不了这篇论文，必要条件用「なしには」。"},
    {q:"<ruby>転職<rt>てんしょく</rt></ruby>する＿＿＿、<ruby>早<rt>はや</rt></ruby>めに<ruby>準備<rt>じゅんび</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がいい。", options:["ものなら","とすれば","なしには","ながら"], answer:1, grammar:"とすれば", explanation:"假如要换工作早点准备比较好，假设用「とすれば」。"}
  ]
},

"Day15": {
  title: "第16課 语法（原因表达体系）",
  grammar: [
    {
      name: "〜による／によって",
      meaning: "因为…（正式书面原因/手段）",
      structure: "名詞＋による／によって",
      examples: [
        {jp:"<ruby>事故<rt>じこ</rt></ruby>によってダイヤが<ruby>乱<rt>みだ</rt></ruby>れた。", cn:"因事故导致列车时刻表混乱。"},
        {jp:"<ruby>台風<rt>たいふう</rt></ruby>による<ruby>被害<rt>ひがい</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きかった。", cn:"台风造成的灾害很大。"}
      ],
      keyPoint: "N2最重要的原因表达！既能表原因也能表手段 📰",
      confusion: "原因用法：事故による被害（因事故造成的灾害）；手段用法：コンピュータにより解決（通过电脑解决）",
      comparison: {pair:"による（原因）vs による（手段）", rows:[["因为…导致","通过…来"],["事故による被害","コンピュータにより解決"],["因事故造成的灾害","通过电脑化解决"],["后接客观结果","后接解决方法"]]}
    },
    {
      name: "〜おかげで／せいで",
      meaning: "多亏…/都怪…（带感情色彩的原因）",
      structure: "名詞＋の／用言連体形＋おかげで／せいで",
      examples: [
        {jp:"<ruby>山川<rt>やまかわ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>のおかげで<ruby>合格<rt>ごうかく</rt></ruby>しました。", cn:"多亏山川老师才合格了。"},
        {jp:"<ruby>気温<rt>きおん</rt></ruby>が<ruby>低<rt>ひく</rt></ruby>いせいで<ruby>桜<rt>さくら</rt></ruby>の<ruby>開花<rt>かいか</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れた。", cn:"都怪气温低樱花开花晚了。"}
      ],
      keyPoint: "おかげで=感谢😊 せいで=抱怨😠 情感色彩完全相反！",
      confusion: "せいか=大概是因为…（推测+消极），おかげさまで=托您的福（客套话）",
      comparison: {pair:"おかげで vs せいで", rows:[["多亏/感谢","都怪/抱怨"],["积极结果","消极结果"],["先生のおかげで合格","気温のせいで遅れた"],["多亏老师才合格","都怪气温低才迟了"]]}
    },
    {
      name: "〜あまり",
      meaning: "因过度…而导致…（极端原因）",
      structure: "感情名詞＋の＋あまり／動詞連体形＋あまり",
      examples: [
        {jp:"<ruby>緊張<rt>きんちょう</rt></ruby>のあまり<ruby>頭<rt>あたま</rt></ruby>が<ruby>真<rt>ま</rt></ruby>っ<ruby>白<rt>しろ</rt></ruby>になった。", cn:"因过度紧张脑袋一片空白。"},
        {jp:"<ruby>急<rt>いそ</rt></ruby>いだあまりミスをした。", cn:"因为太着急犯了错。"}
      ],
      keyPoint: "后接非意志性结果（生理反应/失误/失控）💥",
      confusion: "vs あまり〜ない（N3）：N3的あまり=不太，N2的あまり=因过度",
      comparison: {pair:"あまり（N3）vs あまり（N2）", rows:[["不太…","因过度…而"],["あまり食べない","緊張のあまり"],["不太吃","因过度紧张"],["后接否定","后接极端结果"]]}
    },
    {
      name: "〜ものだから",
      meaning: "因为…所以…（口语辩解/撒娇）",
      structure: "普通形＋ものだから／もので",
      examples: [
        {jp:"<ruby>熱<rt>ねつ</rt></ruby>があったものだから<ruby>休<rt>やす</rt></ruby>んだ。", cn:"因为发烧了所以请假了。"},
        {jp:"<ruby>忙<rt>いそが</rt></ruby>しかったもので<ruby>返事<rt>へんじ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れました。", cn:"因为太忙回复晚了。"}
      ],
      keyPoint: "口语化辩解！有撒娇感，正式场合别用 🥺",
      confusion: "简化形：もん（超口语），もので（稍礼貌），ものだから（标准）",
      comparison: {pair:"ものだから vs ので", rows:[["口语辩解","客观说明"],["热があったものだから","熱があったので"],["因为发烧嘛（辩解）","因为发烧了（客观）"],["带主观语气","中性"]]}
    }
  ],
  questions: [
    {q:"<ruby>台風<rt>たいふう</rt></ruby>＿＿＿<ruby>被害<rt>ひがい</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きかった。", options:["による","のおかげで","のせいで","のあまり"], answer:0, grammar:"による", explanation:"台风造成的灾害很大，正式书面原因修饰名词用「による」。"},
    {q:"<ruby>先生<rt>せんせい</rt></ruby>＿＿＿、<ruby>無事<rt>ぶじ</rt></ruby>に<ruby>卒業<rt>そつぎょう</rt></ruby>できました。", options:["によって","のおかげで","のせいで","のあまり"], answer:1, grammar:"のおかげで", explanation:"多亏老师才顺利毕业，积极感谢用「おかげで」。"},
    {q:"<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>遅<rt>おく</rt></ruby>れ＿＿＿<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>遅刻<rt>ちこく</rt></ruby>した。", options:["によって","のおかげで","のせいで","のあまり"], answer:2, grammar:"のせいで", explanation:"都怪电车晚点才迟到的，消极抱怨用「せいで」。"},
    {q:"<ruby>嬉<rt>うれ</rt></ruby>しさ＿＿＿<ruby>涙<rt>なみだ</rt></ruby>が<ruby>出<rt>で</rt></ruby>た。", options:["によって","のおかげで","のせいで","のあまり"], answer:3, grammar:"のあまり", explanation:"因过度高兴流了泪，感情过度导致非意志结果用「あまり」。"},
    {q:"<ruby>渋滞<rt>じゅうたい</rt></ruby>がひどかった＿＿＿<ruby>遅<rt>おく</rt></ruby>れてしまいました。", options:["による","おかげで","せいで","ものだから"], answer:3, grammar:"ものだから", explanation:"因为堵车太厉害迟到了，口语辩解用「ものだから」。"},
    {q:"コンピュータ<ruby>化<rt>か</rt></ruby>＿＿＿<ruby>労働力<rt>ろうどうりょく</rt></ruby><ruby>不足<rt>ふそく</rt></ruby>を<ruby>解決<rt>かいけつ</rt></ruby>した。", options:["により","のおかげで","のせいで","のあまり"], answer:0, grammar:"により", explanation:"通过电脑化解决了劳动力不足，「により」表手段。"},
    {q:"<ruby>緊張<rt>きんちょう</rt></ruby>＿＿＿<ruby>何<rt>なに</rt></ruby>も<ruby>話<rt>はな</rt></ruby>せなかった。", options:["によって","のおかげで","のせいで","のあまり"], answer:3, grammar:"のあまり", explanation:"因过度紧张什么都说不出来，感情过度用「あまり」。"},
    {q:"<ruby>好天<rt>こうてん</rt></ruby>＿＿＿<ruby>工事<rt>こうじ</rt></ruby>が<ruby>順調<rt>じゅんちょう</rt></ruby>に<ruby>進<rt>すす</rt></ruby>んだ。", options:["によって","のおかげで","のせいで","のあまり"], answer:1, grammar:"のおかげで", explanation:"多亏好天气工程顺利推进，积极结果用「おかげで」。"}
  ]
},

"Day16": {
  title: "第17課 语法（原因表达续篇）",
  grammar: [
    {
      name: "〜からには",
      meaning: "既然…就…（基于既定事实的必然行动）",
      structure: "動詞普通形＋からには",
      examples: [
        {jp:"<ruby>一人<rt>ひとり</rt></ruby>でやると<ruby>言<rt>い</rt></ruby>ったからには、<ruby>人<rt>ひと</rt></ruby>に<ruby>手伝<rt>てつだ</rt></ruby>ってもらえない。", cn:"既然说了要一个人做，就不能请别人帮忙。"},
        {jp:"オリンピック<ruby>出場<rt>しゅつじょう</rt></ruby>を<ruby>目指<rt>めざ</rt></ruby>すからには、<ruby>中途半端<rt>ちゅうとはんぱ</rt></ruby>な<ruby>気持<rt>きも</rt></ruby>ちではだめだ。", cn:"既然目标是参加奥运就不能半途而废。"}
      ],
      keyPoint: "N2核心考点！既定事实→必然结论/义务 ⭐⭐⭐",
      confusion: "vs 以上は：意思相近，からには更强调主观决心",
      comparison: {pair:"からには vs 以上は", rows:[["既然…就必须","既然…就应该"],["主观决心更强","客观义务更强"],["言ったからには","引き受けた以上は"],["既然说了就…","既然接受了就…"]]}
    },
    {
      name: "〜だけに",
      meaning: "正因为…所以…（因果关系，可接好坏结果）",
      structure: "名詞＋な／動詞普通形＋だけに",
      examples: [
        {jp:"<ruby>人気<rt>にんき</rt></ruby>がある<ruby>商品<rt>しょうひん</rt></ruby>だけに、すぐ<ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れた。", cn:"正因为是人气商品，马上就卖光了。"},
        {jp:"<ruby>期待<rt>きたい</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きかっただけに、<ruby>失望<rt>しつぼう</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きい。", cn:"正因为期待大，失望也大。"}
      ],
      keyPoint: "好坏结果都能接！正因为A（原因）→所以B（结果）✨",
      confusion: "vs ために：ために后多接消极结果，だけに好坏都行",
      comparison: {pair:"だけに vs ために", rows:[["正因为（好坏均可）","因为（多消极）"],["人気だけに売り切れた","事故のために渋滞"],["正因为有人气所以卖光","因为事故所以堵车"]]}
    },
    {
      name: "〜ために（消极结果）",
      meaning: "因为…（客观原因→消极结果）",
      structure: "名詞＋の／動詞普通形＋ために",
      examples: [
        {jp:"<ruby>鍵<rt>かぎ</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れたために、<ruby>家<rt>いえ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>れなかった。", cn:"因为忘带钥匙没能进家门。"},
        {jp:"<ruby>大雪<rt>おおゆき</rt></ruby>のために<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>止<rt>と</rt></ruby>まった。", cn:"因为大雪电车停运了。"}
      ],
      keyPoint: "后接消极结果居多，客观因果 📉",
      confusion: "注意：ために既可表原因（因为）也可表目的（为了），N2重点考原因用法",
      comparison: {pair:"ために（原因）vs ために（目的）", rows:[["因为…（原因）","为了…（目的）"],["鍵を忘れたために","合格するために"],["因为忘带钥匙","为了合格"],["后接过去/消极","后接意志/积极"]]}
    },
    {
      name: "〜につき",
      meaning: "因为…（超正式告示用语）",
      structure: "名詞＋につき",
      examples: [
        {jp:"<ruby>清掃中<rt>せいそうちゅう</rt></ruby>につきご<ruby>利用<rt>りよう</rt></ruby>できません。", cn:"因打扫中无法使用。"},
        {jp:"<ruby>強風<rt>きょうふう</rt></ruby>につき<ruby>閉鎖<rt>へいさ</rt></ruby>いたします。", cn:"因强风关闭。"}
      ],
      keyPoint: "只出现在公告/告示牌上！日常不用 📋",
      confusion: "超正式，只用于公文/公告场景",
      comparison: {pair:"につき的典型场景", rows:[["清掃中につき","工事中につき","強風につき","祝日につき"],["打扫中","施工中","大风","节假日"],["不可使用","禁止通行","关闭","休馆"]]}
    }
  ],
  questions: [
    {q:"<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けた＿＿＿、<ruby>最後<rt>さいご</rt></ruby>まで<ruby>頑張<rt>がんば</rt></ruby>らなければならない。", options:["からには","だけに","ために","につき"], answer:0, grammar:"からには", explanation:"既然接受了就必须坚持到最后，既定事实→义务用「からには」。"},
    {q:"<ruby>人気<rt>にんき</rt></ruby>がある<ruby>商品<rt>しょうひん</rt></ruby>＿＿＿、すぐ<ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れた。", options:["からには","だけに","ために","につき"], answer:1, grammar:"だけに", explanation:"正因为是人气商品马上卖光了，因果关系用「だけに」。"},
    {q:"<ruby>大雪<rt>おおゆき</rt></ruby>の＿＿＿<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>止<rt>と</rt></ruby>まった。", options:["からには","だけに","ために","につき"], answer:2, grammar:"ために", explanation:"因为大雪电车停了，客观原因→消极结果用「ために」。"},
    {q:"<ruby>工事中<rt>こうじちゅう</rt></ruby>＿＿＿<ruby>通行<rt>つうこう</rt></ruby>できません。", options:["からには","だけに","ために","につき"], answer:3, grammar:"につき", explanation:"因施工中禁止通行，公告用语用「につき」。"},
    {q:"<ruby>試合<rt>しあい</rt></ruby>に<ruby>出<rt>で</rt></ruby>る＿＿＿、<ruby>全力<rt>ぜんりょく</rt></ruby>で<ruby>戦<rt>たたか</rt></ruby>うべきだ。", options:["からには","だけに","ために","につき"], answer:0, grammar:"からには", explanation:"既然上场比赛就应该全力以赴，决心/义务用「からには」。"},
    {q:"<ruby>期待<rt>きたい</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きかった＿＿＿、<ruby>落胆<rt>らくたん</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きかった。", options:["からには","だけに","ために","につき"], answer:1, grammar:"だけに", explanation:"正因为期待大失落也大，因果用「だけに」。"},
    {q:"<ruby>鍵<rt>かぎ</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れた＿＿＿、<ruby>部屋<rt>へや</rt></ruby>に<ruby>入<rt>はい</rt></ruby>れなかった。", options:["からには","だけに","ために","につき"], answer:2, grammar:"ために", explanation:"因为忘带钥匙进不了房间，客观原因→消极结果用「ために」。"},
    {q:"<ruby>祝日<rt>しゅくじつ</rt></ruby>＿＿＿<ruby>休館<rt>きゅうかん</rt></ruby>しております。", options:["からには","だけに","ために","につき"], answer:3, grammar:"につき", explanation:"因节假日休馆，正式告示用「につき」。"}
  ]
},

"Day17": {
  title: "第18課 语法（难以/不能的表达体系）",
  grammar: [
    {
      name: "〜がたい",
      meaning: "难以…（心理上的困难）",
      structure: "動詞マス形去ます＋がたい",
      examples: [
        {jp:"<ruby>優<rt>やさ</rt></ruby>しい<ruby>彼<rt>かれ</rt></ruby>がこんなひどいことをするなんて、<ruby>信<rt>しん</rt></ruby>じがたい。", cn:"温柔的他竟然做这种过分的事，难以置信。"},
        {jp:"この<ruby>味<rt>あじ</rt></ruby>は<ruby>言葉<rt>ことば</rt></ruby>で<ruby>表現<rt>ひょうげん</rt></ruby>しがたい。", cn:"这种味道难以用语言表达。"}
      ],
      keyPoint: "⚠️ 只接心理活动动词！信じる・理解する・想像する・表現する 🧠",
      confusion: "不能说「日本語を話しがたい」❌ 说话不是心理活动",
      comparison: {pair:"がたい vs かねる", rows:[["心理上难以","委婉拒绝"],["心理活动动词专用","正式场合通用"],["信じがたい","回答しかねます"],["难以相信","难以回答"]]}
    },
    {
      name: "〜かねる",
      meaning: "难以…（委婉礼貌的拒绝）",
      structure: "動詞マス形去ます＋かねる",
      examples: [
        {jp:"メールだけでは<ruby>診断<rt>しんだん</rt></ruby>しかねますので、<ruby>来院<rt>らいいん</rt></ruby>してください。", cn:"仅靠邮件难以诊断，请您来医院。"},
        {jp:"ご<ruby>意見<rt>いけん</rt></ruby>には<ruby>賛成<rt>さんせい</rt></ruby>しかねます。", cn:"难以赞同您的意见。"}
      ],
      keyPoint: "正式场合委婉拒绝的必备语法！比直接说「できない」礼貌得多 🎩",
      confusion: "⚠️ かねる(委婉否定) vs かねない(可能性) 形态相似意思相反！",
      comparison: {pair:"かねる vs かねない", rows:[["委婉否定（难以）","可能性（可能会）"],["无否定词=否定","有否定词=肯定"],["賛成しかねる","悪用されかねない"],["难以赞同","有可能被盗用"]]}
    },
    {
      name: "〜ようがない",
      meaning: "没办法…/完全否定",
      structure: "動詞マス形去ます＋ようがない",
      examples: [
        {jp:"<ruby>彼<rt>かれ</rt></ruby>の<ruby>連絡先<rt>れんらくさき</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からないので、<ruby>連絡<rt>れんらく</rt></ruby>しようがない。", cn:"不知道他的联系方式，没法联系。"},
        {jp:"<ruby>準備<rt>じゅんび</rt></ruby>が<ruby>万全<rt>ばんぜん</rt></ruby>だから、<ruby>失敗<rt>しっぱい</rt></ruby>するようがない。", cn:"准备充分，不可能失败。"}
      ],
      keyPoint: "两种用法：①客观没办法 ②=はずがない（完全否定）🚫",
      confusion: "固定句型：「〜としか言いようがない」= 只能说是…",
      comparison: {pair:"ようがない两种用法", rows:[["客观上没办法","完全否定（=はずがない）"],["連絡しようがない","失敗するようがない"],["没法联系","不可能失败"]]}
    },
    {
      name: "〜得る／得ない",
      meaning: "可能/不可能（可能性判断）",
      structure: "動詞マス形去ます＋得る（える/うる）／得ない（えない）",
      examples: [
        {jp:"<ruby>誰<rt>だれ</rt></ruby>でもがんにかかり<ruby>得<rt>う</rt></ruby>る。", cn:"任何人都有可能患癌症。"},
        {jp:"100メートルを5<ruby>秒<rt>びょう</rt></ruby>で<ruby>走<rt>はし</rt></ruby>るのはあり<ruby>得<rt>え</rt></ruby>ない。", cn:"5秒跑完100米是不可能的。"}
      ],
      keyPoint: "肯定读「える」或「うる」，否定只读「えない」！「ありえない」超高频 🔮",
      confusion: "ありえない=不可能（口语超常用），ありうる=有可能",
      comparison: {pair:"得る vs 得ない", rows:[["可能/有可能","不可能"],["読み：える/うる","読み：えない（只有一种）"],["かかり得る","あり得ない"],["有可能患上","不可能"]]}
    }
  ],
  questions: [
    {q:"<ruby>彼<rt>かれ</rt></ruby>の<ruby>行動<rt>こうどう</rt></ruby>は<ruby>理解<rt>りかい</rt></ruby>し＿＿＿。", options:["がたい","かねる","ようがない","得ない"], answer:0, grammar:"がたい", explanation:"他的行为难以理解，心理活动动词+がたい。"},
    {q:"ご<ruby>要望<rt>ようぼう</rt></ruby>には<ruby>応<rt>おう</rt></ruby>じ＿＿＿。", options:["がたい","かねます","ようがない","得ない"], answer:1, grammar:"かねます", explanation:"难以回应您的要求，正式委婉拒绝用「かねます」。"},
    {q:"<ruby>連絡先<rt>れんらくさき</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からないので<ruby>連絡<rt>れんらく</rt></ruby>し＿＿＿。", options:["がたい","かねる","ようがない","得ない"], answer:2, grammar:"ようがない", explanation:"不知道联系方式客观上没法联系，用「ようがない」。"},
    {q:"そんなことはあり＿＿＿。", options:["がたい","かねる","ようがない","得ない"], answer:3, grammar:"得ない", explanation:"那种事不可能，「あり得ない」是最常用的否定表达。"},
    {q:"その<ruby>提案<rt>ていあん</rt></ruby>は<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れ＿＿＿。", options:["がたいです","かねます","ようがないです","得ないです"], answer:1, grammar:"かねます", explanation:"难以接受该提案，委婉拒绝用「かねます」。"},
    {q:"この<ruby>感動<rt>かんどう</rt></ruby>は<ruby>言葉<rt>ことば</rt></ruby>で<ruby>表<rt>あらわ</rt></ruby>し＿＿＿。", options:["がたい","かねる","ようがない","得ない"], answer:0, grammar:"がたい", explanation:"这种感动难以用语言表达，心理表达用「がたい」。"},
    {q:"<ruby>誰<rt>だれ</rt></ruby>にでも<ruby>起<rt>お</rt></ruby>こり＿＿＿ことだ。", options:["がたい","かねる","ようがない","得る"], answer:3, grammar:"得る", explanation:"谁都有可能发生的事，可能性用「得る」（うる）。"},
    {q:"<ruby>実力<rt>じつりょく</rt></ruby>があるのに<ruby>負<rt>ま</rt></ruby>けたのは、<ruby>運<rt>うん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>かったとしか<ruby>言<rt>い</rt></ruby>い＿＿＿。", options:["がたい","かねる","ようがない","得ない"], answer:2, grammar:"ようがない", explanation:"有实力却输了只能说运气差，「としか言いようがない」是固定句型。"}
  ]
},

"Day18": {
  title: "第19課 语法（比较与评价表达）",
  grammar: [
    {
      name: "〜わりに（は）",
      meaning: "与…相比之下（后接与预期相反的内容）",
      structure: "名詞＋の／形容詞／動詞普通形＋わりに（は）",
      examples: [
        {jp:"お<ruby>菓子<rt>かし</rt></ruby>は<ruby>値段<rt>ねだん</rt></ruby>の<ruby>割<rt>わり</rt></ruby>には<ruby>量<rt>りょう</rt></ruby>が<ruby>少<rt>すく</rt></ruby>ない。", cn:"这点心的量和价格不成正比，太少了。"},
        {jp:"<ruby>若<rt>わか</rt></ruby>いわりにしっかりしている。", cn:"与年龄相比很沉稳可靠。"}
      ],
      keyPoint: "核心逻辑：预期→实际相反！不只是「虽然但是」🔄",
      confusion: "vs にしては：わりに接有幅度概念的词（年齢・値段），にしては接具体数值",
      comparison: {pair:"わりに vs にしては", rows:[["接有幅度概念的词","接具体数值"],["年齢のわりに","18歳にしては"],["与年龄相比","作为18岁来说"],["幅度概念：年龄/价格/距离","具体数值：18岁/1000日元"]]}
    },
    {
      name: "〜にしては",
      meaning: "作为…来说（接具体数值，后接预期相反的内容）",
      structure: "具体数値／名詞＋にしては",
      examples: [
        {jp:"18<ruby>歳<rt>さい</rt></ruby>にしてはしっかりしている。", cn:"作为18岁来说很沉稳可靠。"},
        {jp:"<ruby>二月<rt>にがつ</rt></ruby>にしては<ruby>暖<rt>あたた</rt></ruby>かい。", cn:"作为二月来说很暖和。"}
      ],
      keyPoint: "接具体数字必须用にしては！不能用わりに ⚡",
      confusion: "vs わりに：接年龄数字/具体月份等必须用にしては",
      comparison: {pair:"にしては vs わりに（具体数字）", rows:[["18歳にしては ✅","18歳のわりに ❌"],["1000円にしては ✅","1000円のわりに ❌"],["具体数值→にしては","有幅度→わりに"]]}
    },
    {
      name: "〜だけあって",
      meaning: "不愧是…（因果关系的赞赏）",
      structure: "動詞普通形／名詞＋の＋だけあって",
      examples: [
        {jp:"<ruby>十年<rt>じゅうねん</rt></ruby>も<ruby>住<rt>す</rt></ruby>んでいるだけあって、<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>だ。", cn:"不愧住了十年，日语很好。"},
        {jp:"さすがオリンピック<ruby>選手<rt>せんしゅ</rt></ruby>だけあって、<ruby>試合<rt>しあい</rt></ruby>が<ruby>素晴<rt>すば</rt></ruby>らしい。", cn:"不愧是奥运选手，比赛太精彩了。"}
      ],
      keyPoint: "赞美/肯定语气！常和「さすが」搭配 👏",
      confusion: "vs さすが：だけあって是语法结构，さすが是副词",
      comparison: {pair:"だけあって vs さすが", rows:[["语法结构","副词"],["十年住んだだけあって","さすがオリンピック"],["不愧住了十年","不愧是奥运"],["接续+评价","直接修饰"]]}
    },
    {
      name: "〜にとって",
      meaning: "对于…来说（站在某人立场）",
      structure: "名詞＋にとって",
      examples: [
        {jp:"<ruby>私<rt>わたし</rt></ruby>にとって<ruby>家族<rt>かぞく</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>大切<rt>たいせつ</rt></ruby>だ。", cn:"对我来说家人最重要。"},
        {jp:"<ruby>他人<rt>たにん</rt></ruby>にとっては<ruby>普通<rt>ふつう</rt></ruby>の<ruby>石<rt>いし</rt></ruby>だが、<ruby>私<rt>わたし</rt></ruby>にとっては<ruby>宝物<rt>たからもの</rt></ruby>だ。", cn:"对别人来说是普通石头，对我来说是宝物。"}
      ],
      keyPoint: "表示立场和视角，加「は」表对比 👁️",
      confusion: "vs に対して：にとって=立场/视角，に対して=行为指向对象",
      comparison: {pair:"にとって vs に対して", rows:[["立场/视角","行为对象"],["私にとって大切","社長に対して不満"],["对我来说重要","对社长有不满"],["站在…角度看","指向…做动作"]]}
    }
  ],
  questions: [
    {q:"この<ruby>料理<rt>りょうり</rt></ruby>は<ruby>値段<rt>ねだん</rt></ruby>の＿＿＿<ruby>量<rt>りょう</rt></ruby>が<ruby>少<rt>すく</rt></ruby>ない。", options:["わりに","にしては","だけあって","にとって"], answer:0, grammar:"わりに", explanation:"价格和量不成正比，有幅度概念（价格）用「わりに」。"},
    {q:"<ruby>小学生<rt>しょうがくせい</rt></ruby>＿＿＿よく<ruby>書<rt>か</rt></ruby>けている<ruby>作文<rt>さくぶん</rt></ruby>だ。", options:["のわりに","にしては","だけあって","にとって"], answer:1, grammar:"にしては", explanation:"作为小学生来说作文写得很好，具体身份用「にしては」。"},
    {q:"さすが<ruby>十年<rt>じゅうねん</rt></ruby><ruby>経験<rt>けいけん</rt></ruby>がある＿＿＿、<ruby>仕事<rt>しごと</rt></ruby>が<ruby>速<rt>はや</rt></ruby>い。", options:["わりに","にしては","だけあって","にとって"], answer:2, grammar:"だけあって", explanation:"不愧有十年经验工作效率高，赞赏用「だけあって」。"},
    {q:"<ruby>外国人<rt>がいこくじん</rt></ruby>＿＿＿、<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>敬語<rt>けいご</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しい。", options:["のわりに","にしては","だけあって","にとって"], answer:3, grammar:"にとって", explanation:"对外国人来说日语敬语很难，立场/视角用「にとって」。"},
    {q:"<ruby>二月<rt>にがつ</rt></ruby>＿＿＿<ruby>暖<rt>あたた</rt></ruby>かい<ruby>日<rt>ひ</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>いている。", options:["のわりに","にしては","だけあって","にとって"], answer:1, grammar:"にしては", explanation:"作为二月来说连续暖和的天气，具体月份用「にしては」。"},
    {q:"<ruby>年齢<rt>ねんれい</rt></ruby>の＿＿＿<ruby>若<rt>わか</rt></ruby>く<ruby>見<rt>み</rt></ruby>える。", options:["わりに","にしては","だけあって","にとって"], answer:0, grammar:"わりに", explanation:"与年龄相比看起来年轻，有幅度概念用「わりに」。"},
    {q:"<ruby>留学<rt>りゅうがく</rt></ruby>した＿＿＿、<ruby>英語<rt>えいご</rt></ruby>がペラペラだ。", options:["わりに","にしては","だけあって","にとって"], answer:2, grammar:"だけあって", explanation:"不愧留过学英语流利，赞赏因果用「だけあって」。"},
    {q:"この<ruby>問題<rt>もんだい</rt></ruby>は<ruby>子供<rt>こども</rt></ruby>＿＿＿<ruby>簡単<rt>かんたん</rt></ruby>だが、<ruby>大人<rt>おとな</rt></ruby>＿＿＿<ruby>難<rt>むずか</rt></ruby>しい。", options:["にとっては/にとっては","のわりに/のわりに","にしては/にしては","だけあって/だけあって"], answer:0, grammar:"にとって", explanation:"对小孩来说简单对大人来说难，两个立场对比用「にとっては〜にとっては」。"}
  ]
},

"Day19": {
  title: "第20課 语法（结果/状态表达）",
  grammar: [
    {
      name: "〜たところ（N2用法）",
      meaning: "…之后（发现/结果是）",
      structure: "動詞た形＋ところ",
      examples: [
        {jp:"<ruby>課長<rt>かちょう</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>したところ、2<ruby>週間<rt>しゅうかん</rt></ruby><ruby>休<rt>やす</rt></ruby>めると<ruby>言<rt>い</rt></ruby>われた。", cn:"和课长商量后被告知可以休息两周。"},
        {jp:"<ruby>調<rt>しら</rt></ruby>べたところ、<ruby>原因<rt>げんいん</rt></ruby>は<ruby>人為的<rt>じんいてき</rt></ruby>なミスだった。", cn:"调查后发现原因是人为失误。"}
      ],
      keyPoint: "N2用法：做了A→引出B结果。和N4的「刚做完」完全不同！🔍",
      confusion: "vs N4：〜たところだ=刚做完，〜たところ（N2）=做了之后结果是",
      comparison: {pair:"たところ N4 vs N2", rows:[["N4：刚做完","N2：做了之后发现"],["食べたところだ","調べたところ"],["刚吃完","调查后发现"],["表示时间点","引出结果"]]}
    },
    {
      name: "〜たきり",
      meaning: "自从…之后就再也没有…",
      structure: "動詞た形＋きり",
      examples: [
        {jp:"<ruby>出<rt>で</rt></ruby>かけたきり、まだ<ruby>帰<rt>かえ</rt></ruby>ってきていません。", cn:"出门后就再也没回来。"},
        {jp:"<ruby>子供<rt>こども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>に<ruby>読<rt>よ</rt></ruby>んだきり、この<ruby>本<rt>ほん</rt></ruby>は<ruby>一度<rt>いちど</rt></ruby>も<ruby>読<rt>よ</rt></ruby>んでいない。", cn:"小时候读过之后这本书就再也没读过。"}
      ],
      keyPoint: "做了某事后状态一直持续到现在没变 😶",
      confusion: "vs まま：きり=动作完成后不再变化，まま=保持原有状态",
      comparison: {pair:"きり vs まま", rows:[["做完后不再变化","保持原有状态"],["出かけたきり帰らない","ドアを開けたまま出た"],["出门后再没回来","开着门就出去了"],["强调不变/不再","强调保持"]]}
    },
    {
      name: "〜ところだった",
      meaning: "差点就…（实际没发生）",
      structure: "動詞辞書形＋ところだった",
      examples: [
        {jp:"うっかり<ruby>約束<rt>やくそく</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れるところだった。", cn:"差点忘了约定。"},
        {jp:"<ruby>危<rt>あや</rt></ruby>うく<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>り<ruby>遅<rt>おく</rt></ruby>れるところだった。", cn:"险些没赶上电车。"}
      ],
      keyPoint: "常搭配「うっかり」「危うく」「もう少しで」🫣",
      confusion: "实际没发生！差点发生但幸好没有",
      comparison: {pair:"ところだった的搭配", rows:[["うっかり","危うく","もう少しで"],["不小心","险些","差一点"],["忘れるところだった","遅れるところだった","落ちるところだった"]]}
    },
    {
      name: "〜ずじまい",
      meaning: "最终没能…（含遗憾语气）",
      structure: "動詞未然形＋ずじまい",
      examples: [
        {jp:"<ruby>田中<rt>たなか</rt></ruby>さんの<ruby>連絡先<rt>れんらくさき</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からずじまいだった。", cn:"最终没能问到田中的联系方式。"},
        {jp:"<ruby>旅行<rt>りょこう</rt></ruby>したかったが、<ruby>忙<rt>いそが</rt></ruby>しくて<ruby>行<rt>い</rt></ruby>かずじまいで<ruby>帰国<rt>きこく</rt></ruby>した。", cn:"想去旅行但因为忙最终没能去就回国了。"}
      ],
      keyPoint: "想做但最终没做成，带遗憾语气 😞",
      confusion: "注意变形：行く→行かず，する→せず",
      comparison: {pair:"ずじまい vs ないまま", rows:[["最终没能（遗憾）","没做就…（状态）"],["行かずじまい","行かないまま"],["最终没能去（想去没去成）","没去就…（客观描述）"]]}
    }
  ],
  questions: [
    {q:"<ruby>医者<rt>いしゃ</rt></ruby>に<ruby>診<rt>み</rt></ruby>てもらった＿＿＿、ただの<ruby>風邪<rt>かぜ</rt></ruby>だと<ruby>言<rt>い</rt></ruby>われた。", options:["ところ","きり","ところだった","ずじまい"], answer:0, grammar:"たところ", explanation:"让医生看了之后被告知只是感冒，做了之后引出结果用「たところ」。"},
    {q:"<ruby>卒業<rt>そつぎょう</rt></ruby>してから<ruby>会<rt>あ</rt></ruby>った＿＿＿、もう<ruby>十年<rt>じゅうねん</rt></ruby><ruby>経<rt>た</rt></ruby>つ。", options:["ところ","きり","ところだった","ずじまい"], answer:1, grammar:"きり", explanation:"毕业后见了一面之后就再没见过都过了十年了，状态持续用「きり」。"},
    {q:"うっかり<ruby>財布<rt>さいふ</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れる＿＿＿。", options:["ところ","きり","ところだった","ずじまい"], answer:2, grammar:"ところだった", explanation:"差点忘了钱包，实际没发生用「ところだった」。"},
    {q:"<ruby>結局<rt>けっきょく</rt></ruby><ruby>真相<rt>しんそう</rt></ruby>は<ruby>分<rt>わ</rt></ruby>から＿＿＿だった。", options:["たところ","たきり","ところ","ずじまい"], answer:3, grammar:"ずじまい", explanation:"最终真相没能弄清，带遗憾用「ずじまい」。"},
    {q:"<ruby>出<rt>で</rt></ruby>かけた＿＿＿、まだ<ruby>帰<rt>かえ</rt></ruby>ってこない。", options:["ところ","きり","ところだった","ずじまい"], answer:1, grammar:"きり", explanation:"出门后还没回来，状态持续不变用「きり」。"},
    {q:"<ruby>危<rt>あや</rt></ruby>うく<ruby>車<rt>くるま</rt></ruby>にぶつかる＿＿＿。", options:["ところ","きり","ところだった","ずじまい"], answer:2, grammar:"ところだった", explanation:"险些被车撞，差点发生用「ところだった」。"},
    {q:"<ruby>友人<rt>ゆうじん</rt></ruby>にお<ruby>金<rt>かね</rt></ruby>を<ruby>貸<rt>か</rt></ruby>した＿＿＿、すぐに<ruby>返<rt>かえ</rt></ruby>してくれた。", options:["ところ","きり","ところだった","ずじまい"], answer:0, grammar:"ところ", explanation:"借了钱之后对方马上就还了，做了A引出B结果用「たところ」。"},
    {q:"あの<ruby>映画<rt>えいが</rt></ruby>は<ruby>見<rt>み</rt></ruby>たかったが、<ruby>忙<rt>いそが</rt></ruby>しくて<ruby>見<rt>み</rt></ruby>＿＿＿だった。", options:["たところ","たきり","るところ","ずじまい"], answer:3, grammar:"ずじまい", explanation:"想看那部电影但太忙最终没看成，遗憾用「ずじまい」。"}
  ]
},

"Day20": {
  title: "第21課 语法（をはじめ/に関わらず/に先立って/抜きにして）",
  grammar: [
    {
      name: "〜に先立って",
      meaning: "在…之前（事先做好准备）",
      structure: "名詞＋に先立って／に先立ち",
      examples: [
        {jp:"<ruby>工事<rt>こうじ</rt></ruby>に<ruby>先立<rt>さきだ</rt></ruby>って、<ruby>住民<rt>じゅうみん</rt></ruby><ruby>説明会<rt>せつめいかい</rt></ruby>が<ruby>開<rt>ひら</rt></ruby>かれた。", cn:"施工之前召开了居民说明会。"},
        {jp:"<ruby>開会<rt>かいかい</rt></ruby>に<ruby>先立<rt>さきだ</rt></ruby>ち、<ruby>会長<rt>かいちょう</rt></ruby>から<ruby>挨拶<rt>あいさつ</rt></ruby>があった。", cn:"开会之前会长致辞。"}
      ],
      keyPoint: "正式场合：在某活动之前做准备工作 📋",
      confusion: "vs 前に：に先立って更正式，强调「为了做好准备」",
      comparison: {pair:"に先立って vs 前に", rows:[["正式/准备性","通用/时间顺序"],["工事に先立って説明会","工事の前に確認"],["施工前召开说明会","施工前确认"],["强调事先准备","单纯时间先后"]]}
    },
    {
      name: "〜を抜きにして",
      meaning: "撇开…不谈/去掉…",
      structure: "名詞＋を抜きにして（は）",
      examples: [
        {jp:"<ruby>冗談<rt>じょうだん</rt></ruby>を<ruby>抜<rt>ぬ</rt></ruby>きにして、<ruby>真剣<rt>しんけん</rt></ruby>に<ruby>話<rt>はな</rt></ruby>しましょう。", cn:"别开玩笑了，认真谈吧。"},
        {jp:"<ruby>彼<rt>かれ</rt></ruby>を<ruby>抜<rt>ぬ</rt></ruby>きにしては、このプロジェクトは<ruby>成功<rt>せいこう</rt></ruby>しなかっただろう。", cn:"没有他的话这个项目不会成功吧。"}
      ],
      keyPoint: "两种意思：①撇开不谈 ②缺了…就不行 🚫",
      confusion: "加「は」后面接否定=缺了…就不行",
      comparison: {pair:"抜きにして vs 抜きにしては", rows:[["撇开…不谈","缺了…就不行"],["冗談を抜きにして","彼を抜きにしては"],["别开玩笑了","没有他的话"],["搁置某话题","强调不可或缺"]]}
    },
    {
      name: "〜にかかわらず",
      meaning: "无论…都…（不受某条件限制）",
      structure: "名詞＋にかかわらず",
      examples: [
        {jp:"<ruby>天候<rt>てんこう</rt></ruby>にかかわらず、イベントは<ruby>実施<rt>じっし</rt></ruby>します。", cn:"无论天气如何活动照常举行。"},
        {jp:"<ruby>結果<rt>けっか</rt></ruby>の<ruby>良<rt>よ</rt></ruby>し<ruby>悪<rt>あ</rt></ruby>しにかかわらず、<ruby>報告<rt>ほうこく</rt></ruby>してください。", cn:"无论结果好坏都请报告。"}
      ],
      keyPoint: "和「を問わず」「に関わりなく」意思相近 🔄",
      confusion: "vs にもかかわらず：にかかわらず=无论…都（不受限），にもかかわらず=尽管…仍（转折）",
      comparison: {pair:"にかかわらず vs にもかかわらず", rows:[["无论…都（不受限）","尽管…仍（转折）"],["天候にかかわらず実施","雨にもかかわらず出発"],["无论天气都举行","尽管下雨仍出发"]]}
    },
    {
      name: "〜に伴って",
      meaning: "随着…（伴随变化）",
      structure: "名詞＋に伴って／に伴い",
      examples: [
        {jp:"<ruby>人口<rt>じんこう</rt></ruby>の<ruby>増加<rt>ぞうか</rt></ruby>に<ruby>伴<rt>ともな</rt></ruby>って、<ruby>住宅<rt>じゅうたく</rt></ruby><ruby>問題<rt>もんだい</rt></ruby>が<ruby>深刻<rt>しんこく</rt></ruby>になった。", cn:"随着人口增加住房问题变得严重。"},
        {jp:"<ruby>経済<rt>けいざい</rt></ruby><ruby>成長<rt>せいちょう</rt></ruby>に<ruby>伴<rt>ともな</rt></ruby>い、<ruby>環境<rt>かんきょう</rt></ruby><ruby>問題<rt>もんだい</rt></ruby>も<ruby>増<rt>ふ</rt></ruby>えた。", cn:"伴随经济增长环境问题也增多了。"}
      ],
      keyPoint: "A变化→B也跟着变化，强调连动关系 📈",
      confusion: "vs につれて：に伴って更书面正式",
      comparison: {pair:"に伴って vs につれて", rows:[["书面正式","口语通用"],["人口増加に伴って","人口が増えるにつれて"],["随着人口增加","随着人口增多"],["接名词","接动词辞书形"]]}
    }
  ],
  questions: [
    {q:"<ruby>新商品<rt>しんしょうひん</rt></ruby>の<ruby>発売<rt>はつばい</rt></ruby>＿＿＿、<ruby>記者<rt>きしゃ</rt></ruby><ruby>会見<rt>かいけん</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>われた。", options:["に先立って","を抜きにして","にかかわらず","に伴って"], answer:0, grammar:"に先立って", explanation:"新产品发售前召开了记者会，事先准备用「に先立って」。"},
    {q:"<ruby>冗談<rt>じょうだん</rt></ruby>＿＿＿、<ruby>本題<rt>ほんだい</rt></ruby>に<ruby>入<rt>はい</rt></ruby>りましょう。", options:["に先立って","を抜きにして","にかかわらず","に伴って"], answer:1, grammar:"を抜きにして", explanation:"撇开玩笑进入正题，搁置不相关话题用「を抜きにして」。"},
    {q:"<ruby>天候<rt>てんこう</rt></ruby>＿＿＿<ruby>試合<rt>しあい</rt></ruby>は<ruby>予定通<rt>よていどお</rt></ruby>り<ruby>行<rt>おこな</rt></ruby>います。", options:["に先立って","を抜きにして","にかかわらず","に伴って"], answer:2, grammar:"にかかわらず", explanation:"无论天气如何比赛照常举行，不受限制用「にかかわらず」。"},
    {q:"<ruby>技術<rt>ぎじゅつ</rt></ruby>の<ruby>発展<rt>はってん</rt></ruby>＿＿＿、<ruby>生活<rt>せいかつ</rt></ruby>が<ruby>便利<rt>べんり</rt></ruby>になった。", options:["に先立って","を抜きにして","にかかわらず","に伴って"], answer:3, grammar:"に伴って", explanation:"随着技术发展生活变便利了，伴随变化用「に伴って」。"},
    {q:"<ruby>彼<rt>かれ</rt></ruby>＿＿＿は、この<ruby>計画<rt>けいかく</rt></ruby>は<ruby>実現<rt>じつげん</rt></ruby>できなかっただろう。", options:["に先立って","を抜きにして","にかかわらず","に伴って"], answer:1, grammar:"を抜きにして", explanation:"没有他这个计划无法实现，强调不可或缺用「を抜きにしては」。"},
    {q:"<ruby>開会<rt>かいかい</rt></ruby>＿＿＿、<ruby>注意<rt>ちゅうい</rt></ruby><ruby>事項<rt>じこう</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>します。", options:["に先立ち","を抜きにして","にかかわらず","に伴い"], answer:0, grammar:"に先立ち", explanation:"开会之前说明注意事项，事先准备用「に先立ち」。"},
    {q:"<ruby>結果<rt>けっか</rt></ruby>の<ruby>良<rt>よ</rt></ruby>し<ruby>悪<rt>あ</rt></ruby>し＿＿＿、<ruby>連絡<rt>れんらく</rt></ruby>をください。", options:["に先立って","を抜きにして","にかかわらず","に伴って"], answer:2, grammar:"にかかわらず", explanation:"无论结果好坏都请联系，不受限制用「にかかわらず」。"},
    {q:"<ruby>高齢化<rt>こうれいか</rt></ruby>＿＿＿、<ruby>医療費<rt>いりょうひ</rt></ruby>が<ruby>増加<rt>ぞうか</rt></ruby>している。", options:["に先立って","を抜きにして","にかかわらず","に伴って"], answer:3, grammar:"に伴って", explanation:"随着老龄化医疗费增加，伴随变化用「に伴って」。"}
  ]
},

"Day21": {
  title: "第22課 语法（推测表达体系）",
  grammar: [
    {
      name: "〜かねない",
      meaning: "有可能…（担忧负面结果）",
      structure: "動詞マス形去ます＋かねない",
      examples: [
        {jp:"<ruby>個人<rt>こじん</rt></ruby><ruby>情報<rt>じょうほう</rt></ruby>が<ruby>悪用<rt>あくよう</rt></ruby>されかねない。", cn:"个人信息有可能被盗用。"},
        {jp:"<ruby>文句<rt>もんく</rt></ruby>を<ruby>言<rt>い</rt></ruby>われかねない。", cn:"有可能被抱怨。"}
      ],
      keyPoint: "⚠️ 仅用于负面事项！形式是否定但意思是肯定（有可能）⭐⭐⭐",
      confusion: "vs かねる：かねない=有可能（负面），かねる=难以/委婉拒绝",
      comparison: {pair:"かねない vs かねる", rows:[["可能会（负面）","难以（委婉否定）"],["形否定实肯定","形肯定实否定"],["悪用されかねない","回答しかねる"],["有可能被盗用","难以回答"]]}
    },
    {
      name: "〜恐れがある",
      meaning: "有…的可能/危险（灾害/风险场景）",
      structure: "名詞＋の＋恐れがある",
      examples: [
        {jp:"<ruby>台風<rt>たいふう</rt></ruby>が<ruby>接近<rt>せっきん</rt></ruby>し、<ruby>大雨<rt>おおあめ</rt></ruby>の<ruby>恐<rt>おそ</rt></ruby>れがあります。", cn:"台风接近，有大雨的可能。"},
        {jp:"<ruby>地震<rt>じしん</rt></ruby>により<ruby>津波<rt>つなみ</rt></ruby>の<ruby>恐<rt>おそ</rt></ruby>れがある。", cn:"因地震有海啸的危险。"}
      ],
      keyPoint: "新闻/灾害报道专用！比かねない更正式 📺",
      confusion: "vs かねない：恐れがある更正式书面，多用于新闻/天气预报",
      comparison: {pair:"恐れがある vs かねない", rows:[["新闻正式","通用"],["大雨の恐れがある","悪用されかねない"],["有大雨的可能（新闻）","有可能被盗用（通用）"]]}
    },
    {
      name: "〜に違いない",
      meaning: "一定是…（基于逻辑的肯定判断）",
      structure: "普通形＋に違いない",
      examples: [
        {jp:"<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れたに<ruby>違<rt>ちが</rt></ruby>いない。", cn:"一定习惯了生活。"},
        {jp:"あの<ruby>人<rt>ひと</rt></ruby>は<ruby>日本人<rt>にほんじん</rt></ruby>に<ruby>違<rt>ちが</rt></ruby>いない。", cn:"那个人一定是日本人。"}
      ],
      keyPoint: "书面语「一定是…」！口语版是「にきまっている」🎯",
      confusion: "vs にきまっている：に違いない=书面，にきまっている=口语",
      comparison: {pair:"に違いない vs にきまっている", rows:[["书面语","口语"],["基于逻辑判断","主观确信"],["慣れたに違いない","嘘にきまってる"],["一定习惯了（推断）","肯定是谎话（确信）"]]}
    },
    {
      name: "〜ではあるまいか",
      meaning: "难道不是…吗（书面否定推测）",
      structure: "普通形＋のではあるまいか",
      examples: [
        {jp:"このままでは<ruby>失敗<rt>しっぱい</rt></ruby>するのではあるまいか。", cn:"照这样下去难道不会失败吗。"},
        {jp:"<ruby>彼<rt>かれ</rt></ruby>はもう<ruby>知<rt>し</rt></ruby>っているのではあるまいか。", cn:"他难道不是已经知道了吗。"}
      ],
      keyPoint: "书面否定推测，相当于口语的「のではないか」📜",
      confusion: "超级书面！口语用「のではないか」就行",
      comparison: {pair:"ではあるまいか vs ではないか", rows:[["书面正式","口语通用"],["失敗するのではあるまいか","失敗するのではないか"],["难道不会失
