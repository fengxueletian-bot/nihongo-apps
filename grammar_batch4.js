// ============ Day22 ~ Day25 语法数据 ============
// 第23課～第26課
// 格式兼容 DAILY_DATA，可直接合并

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
