// ============ Day10 ~ Day16 语法数据 ============
// 基于周业繁老师B站N2语法课程笔记生成
// 第11課～第17課
// 格式兼容 DAILY_DATA，可直接合并

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
