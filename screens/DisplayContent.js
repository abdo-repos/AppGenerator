import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import Tags from '../components/Tags';
import {useNavigation} from '@react-navigation/native';

import PreviewContent from '../components/PreviewContent';

const DATA = {
  tags: [
    {tagName: 'tri', id: '1'},
    {tagName: 'complexité', id: '2'},
    {tagName: 'pile', id: '3'},
    {tagName: 'file', id: '4'},
    {tagName: 'pointeur', id: '5'},
    {tagName: 'arbre', id: '6'},
    {tagName: 'tas', id: '7'},
    {tagName: 'avl', id: '8'},
  ],
  onglet: {
    id: '1',
    ongletName: 'cours',
    chapters: [
      {
        id: '1',
        chapterName: "Element d'algorithmique",
        volumeHoraire: 30,
        Niveau: 2,
        content: `<p><span style="font-size:14px"><strong>1.2 R&eacute;cursivit&eacute; </strong></span></p>

<p><strong><span style="font-size:14px">1.2.1 Introduction </span></strong></p>

<p><em><strong><span style="font-size:14px">Deﬁnition 1.2.1</span></strong></em></p>

<blockquote>
<p>La r&eacute;cursivit&eacute; est une d&eacute;marche qui consiste &agrave; faire r&eacute;f&eacute;rence &agrave; ce qui fait l&rsquo;objet de la d&eacute;marche.</p>
</blockquote>

<p><strong><span style="font-size:14px">Exemples :</span></strong></p>

<p>&mdash; D&eacute;crire un processus sur des donn&eacute;es qui fait appel au m&ecirc;me processus sur d&rsquo;autres donn&eacute;es.</p>

<p>&mdash; Montrer une image contenant des images similaires</p>

<p>&mdash; D&eacute;ﬁnir un concept en invoquant le m&ecirc;me concept.</p>

<p>Le principe de r&eacute;cursivit&eacute; est utilis&eacute; dans la biologie, les arts et la publicit&eacute;. voil&agrave; deux exemples qui illustre ce principe :<br />
- Les poup&eacute;es russes ou matriochkas sont des s&eacute;ries de poup&eacute;es de tailles d&eacute;croissantes plac&eacute;es les unes &agrave; l&rsquo;int&eacute;rieur des autres.</p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="Poupées russes" height="169" src="https://i.imgur.com/TjbmD0c.png" width="211" />
<figcaption>Poup&eacute;es russes</figcaption>
</figure>
</div>

<p><br />
- Le principe de r&eacute;cursivit&eacute; est utilis&eacute; dans la publicit&eacute; de la vache qui rit. Dans la boite de la vache qui rit, on aper&ccedil;oit deux boites de la vache qui rit.</p>

<div style="text-align:center">
<figure class="image" style="display:inline-block"><img alt="La vache qui rit" height="145" src="https://i.imgur.com/GxSlAhY.png" width="219" />
<figcaption>La vache qui rit</figcaption>
</figure>
</div>

<p><br />
<strong>Exemple introductif </strong></p>

<p>On pr&eacute;sente un algorithme qui utilise le principe de r&eacute;cursivit&eacute;.</p>

<p><strong>Algorithm 7&nbsp;:&nbsp;</strong><em>Addition</em></p>

<blockquote>
<h3>Data : entier $n$</h3>

<h3>Result : entier $resultat$</h3>

<h3>if &nbsp;$n&nbsp;&gt; 1$ then</h3>

<h3>return $n + Addition(n&minus;1)$</h3>

<h3>else</h3>

<h3>return $1$;</h3>

<h3>end if&nbsp;</h3>
</blockquote>

<p>Pour $N = 4$, ex&eacute;cutons $Addition(4)$<br />
&rarr; $Addition(4) = 4+ Addition(3) = 10$</p>

<p>&rarr; $Addition(3) = 3+ Addition(2) = 6$</p>

<p>&rarr; $Addition(2) = 2+ Addition(1) = 3$</p>

<p>&rarr; $Addition(1) = 1$</p>

<p><strong><span style="font-size:14px">1.2.2 Algorithmes r&eacute;cursifs </span></strong></p>

<p><em><strong><span style="font-size:14px">Deﬁnition 1.2.2 </span></strong></em></p>

<blockquote>
<p>Un algorithme est dit r&eacute;cursif lorsqu&rsquo;il est d&eacute;ﬁni en fonction de lui-m&ecirc;me. Un programme r&eacute;cursif est un programme qui s&rsquo;appelle lui-m&ecirc;me.</p>
</blockquote>

<p><strong><span style="font-size:14px">Avantages : </span></strong></p>

<blockquote>
<p>1 La r&eacute;cursivit&eacute; est une notion importante de la programmation.</p>

<p>2 Elle permet de r&eacute;gler des probl&egrave;mes complexes d&rsquo;une mani&egrave;re tr&egrave;s rapide.</p>

<p>3 Un m&eacute;canisme naturel qui permet &agrave; un sous-programme &agrave; faire appel &agrave; lui-m&ecirc;me.</p>

<p>4 Outil simpliﬁant, lisible, efﬁcace et souvent sous estim&eacute;.</p>
</blockquote>

<p><strong><span style="font-size:14px">Inconv&eacute;nients : </span></strong></p>

<blockquote>
<p>Cependant, une m&eacute;thode avec laquelle il est facile de se perdre et d&rsquo;avoir des r&eacute;sultats impr&eacute;visibles ou erron&eacute;s.</p>
</blockquote>

<p>Mod&egrave;le g&eacute;n&eacute;rale</p>

<p>Les algorithmes r&eacute;cursifs respectent le mod&egrave;le g&eacute;n&eacute;rale suivant :&nbsp;&nbsp;</p>

<p><strong>Algorithm 8&nbsp;:&nbsp;</strong><em>Mod&egrave;le g&eacute;n&eacute;ral&nbsp;</em></p>

<blockquote>
<h3><strong>Data : $Entr&eacute;es$&nbsp;</strong></h3>

<h3><strong>Result : $Sorties$ </strong></h3>

<h3>Var : D&eacute;claration des variables locales;</h3>

<h3><strong>if &nbsp;</strong>Test d&rsquo;arr&ecirc;t <strong>then</strong></h3>

<h3>Instruction du point d&rsquo;arr&ecirc;t;</h3>

<h3><strong>else</strong></h3>

<h3>Instructions;</h3>

<h3>$R&eacute;cursivit&eacute;(Param&egrave;tres chang&eacute;es)$;</h3>

<h3><strong>end if</strong></h3>
</blockquote>

<p><em><strong><span style="font-size:14px">Remarque 1.2.3</span></strong></em></p>

<blockquote>
<p>Tout sous-programme r&eacute;cursif doit comporter un test d&rsquo;arr&ecirc;t. Le test d&rsquo;arr&ecirc;t indique quand est-ce que :</p>

<p>- on ex&eacute;cute les instructions du point d&rsquo;arr&ecirc;t;</p>

<p>- on arr&ecirc;te les appels r&eacute;cursifs du sous-programme.&nbsp;</p>
</blockquote>

<p>Au risque d&rsquo;entra&icirc;ner des appels inﬁnis, les param&egrave;tres de l&rsquo;appel r&eacute;cursif doivent changer &agrave; chaque appel. Gr&acirc;ce &agrave; ces changements de param&egrave;tres :</p>

<p>- l&rsquo;ordinateur va rencontrer un ensemble de param&egrave;tres v&eacute;riﬁant le test d&rsquo;arr&ecirc;t;</p>

<p>- le sous-programme r&eacute;cursif va atteindre le point terminal.</p>

<p><strong><span style="font-size:14px">Principes de la r&eacute;cursivit&eacute; : </span></strong></p>

<blockquote>
<p>Les m&ecirc;mes principes que ceux de la d&eacute;monstration par r&eacute;currence en Math&eacute;matiques. On doit avoir :</p>

<p>- On doit connaitre la solution du premier cas.</p>

<p>- Un certain nombre de cas simples dont la r&eacute;solution est connue et qui vont satisfaire le test d&rsquo;arr&ecirc;t;</p>

<p>- Un moyen de ramener un cas compliqu&eacute; &agrave; un cas plus simple.</p>
</blockquote>

<p>La r&eacute;cursivit&eacute; permet d&rsquo;&eacute;crire des algorithmes concis et &eacute;l&eacute;gants.</p>

<p><strong><span style="font-size:14px">Dangers de la r&eacute;cursivit&eacute; : </span></strong></p>

<blockquote>
<p>&mdash; La d&eacute;ﬁnition peut &ecirc;tre d&eacute;nu&eacute;e de sens.</p>

<p>&mdash; Il faut &ecirc;tre s&ucirc;r que l&rsquo;on retombera toujours sur un cas d&rsquo;arr&ecirc;t.</p>

<p>&mdash; Il faut s&rsquo;assurer que le sous-programme est d&eacute;ﬁni sur tout son domaine d&rsquo;application.</p>
</blockquote>

<p><strong><span style="font-size:14px">1.2.3 Probl&egrave;mes r&eacute;cursifs</span></strong></p>

<p><em><strong><span style="font-size:14px">Deﬁnition 1.2.4 </span></strong></em></p>

<blockquote>
<p>Il existe certains probl&egrave;mes dont la d&eacute;ﬁnition est r&eacute;cursive.</p>

<p>&mdash; On parle de probl&egrave;mes r&eacute;cursifs.<br />
&mdash; Ce genre de probl&egrave;me se programme &agrave; l&rsquo;aide de sous-programmes r&eacute;cursifs.</p>
</blockquote>

<p>Les probl&egrave;mes r&eacute;cursifs peuvent toujours &ecirc;tre r&eacute;solus &agrave; l&rsquo;aide d&rsquo;algorithmes s&eacute;quentiels (non-r&eacute;cursif), mais souvent la solution est plus complexe.</p>

<p>Inversement, certains probl&egrave;mes it&eacute;ratifs (s&eacute;quentiel) peuvent &ecirc;tre r&eacute;solus &agrave; l&rsquo;aide de sous-programmes r&eacute;cursifs.&nbsp;&nbsp;</p>

<p style="margin-left:80px"><span style="font-size:14px"><strong>Transformation de boucle en un algorithme r&eacute;cursif.</strong></span></p>

<p><strong>Algorithm 9&nbsp;:&nbsp;</strong><em>Calcul de la somme des n premiers naturels : S&eacute;quentiel&nbsp;&nbsp;</em></p>

<blockquote>
<h3>Data : entier $n$</h3>

<h3>Result : entier $resultat$</h3>

<h3>Var : entier $i$;</h3>

<h3>$resultat&larr;&minus;0$;</h3>

<h3>for $i &larr; 1$&nbsp;&agrave; $N$ do</h3>

<h3>$resultat &larr; resultat+i$</h3>

<h3>end for</h3>

<h3>return $resultat$;</h3>
</blockquote>

<p>On peut transformer l&rsquo;algorithme s&eacute;quentielle d&rsquo;addition en algorithme r&eacute;cursive.</p>

<p><strong>Algorithm 10&nbsp;:&nbsp;</strong><em>Calcul de la somme des n premiers naturels : R&eacute;cursif&nbsp;&nbsp;</em></p>

<blockquote>
<h3>Data : entier $n$</h3>

<h3>Result : entier $resultat$</h3>

<h3>if &nbsp;$n &gt; 1$ then</h3>

<h3>return $n+ Addition(n - 1)$</h3>

<h3>else</h3>

<h3>return $1$;</h3>

<h3>end if</h3>
</blockquote>

<p>&nbsp;<em><strong><span style="font-size:14px">Remarque 1.2.5 </span></strong></em></p>

<blockquote>
<p>L&rsquo;algorithme r&eacute;cursif respecte le mod&egrave;le g&eacute;n&eacute;rale et un test d&rsquo;arr&ecirc;t ($N= 1$). La variable $N$ d&eacute;croit &agrave; chaque nouvel appel, ce qui nous garantit l&rsquo;arr&ecirc;t de l&rsquo;algorithme.</p>
</blockquote>

<p>Voila un deuxi&egrave;me exemple, celle de la fonction Factorielle.</p>

<p><strong>Algorithm 11&nbsp;:&nbsp;</strong><em>Algorithme factorielle : S&eacute;quentiel&nbsp;&nbsp;</em></p>

<blockquote>
<h3>Data : entier $n$</h3>

<h3>Result : entier $resultat$</h3>

<h3>Var : entier $i$;</h3>

<h3>$resultat &larr; 1$;</h3>

<h3>for $i &larr; 2$ &agrave; $N$ do</h3>

<h3>$resultat &larr;resultat&lowast;i$;</h3>

<h3>end for</h3>

<h3>return $resultat$</h3>
</blockquote>

<p>&nbsp;</p>

<p><strong>Algorithm 12&nbsp;:&nbsp;</strong><em>Algorithme factorielle : R&eacute;cursif&nbsp;</em></p>

<blockquote>
<h3>Data : entier $n$</h3>

<h3>Result : entier $resultat$</h3>

<h3>if &nbsp;$N &gt; 1$ then</h3>

<h3>return $N * Factorielle(N - 1)$;</h3>

<h3>else</h3>

<h3>return $1$;</h3>

<h3>end if</h3>
</blockquote>

<p>Certains probl&egrave;mes sont de nature r&eacute;cursive comme la suite de Fibonacci.</p>

<p>Suite de Fibonacci</p>

<p>$$U_n = \text&quot;{&quot; ^{U_0 = U_1 = 1 } _{U_n = U_{n&minus;1} &minus; U_{n&minus;2} n&ge;2}&nbsp;$$</p>

<p style="margin-left:40px"><strong><span style="font-size:14px">Algorithme it&eacute;ratif</span></strong></p>

<p><strong>Algorithm 13&nbsp;:&nbsp;</strong><em>&nbsp;Suite de Fibonacci : S&eacute;quentiel&nbsp;</em></p>

<blockquote>
<h3>Data : entier $n$</h3>

<h3>Result : entier $U_2$</h3>

<h3>Var : $U_0, U_1, U_2, i $ : entier;</h3>

<h3>$U_0 &larr; 1$;</h3>

<h3>$U_1 &larr; 1$;</h3>

<h3>$U_2&nbsp;&larr; 1$;</h3>

<h3>for $i &larr; 2$ &agrave; $N$ do</h3>

<h3>$U_i &larr; U_{i&minus;1} + U_{i&minus;2}$;</h3>

<h3>$U_{i&minus;2} &larr; U_{i&minus;1}$;</h3>

<h3>$U_{i&minus;1} &larr; U_i $;</h3>

<h3>end for</h3>

<h3>return $U_i$</h3>
</blockquote>

<p><strong>Algorithm 14&nbsp;:&nbsp;</strong><em>&nbsp;Suite de Fibonacci : R&eacute;cursif</em></p>

<blockquote>
<h3>Data : entier $n$</h3>

<h3>Result : entier $resultat$</h3>

<h3>if &nbsp;$N &ge;1$ then</h3>

<h3>return $1;</h3>

<h3>else</h3>

<h3>return $Fib(N&minus;1) + Fib(N&minus;2)$;</h3>

<h3>end if</h3>
</blockquote>

<p><em><strong><span style="font-size:14px">Remarque 1.2.6 </span></strong></em></p>

<blockquote>
<p>L&rsquo;impl&eacute;mentation de la suite Fibonacci avec un algorithme r&eacute;cursif est plus simple.</p>
</blockquote>

<p><em><strong><span style="font-size:14px">Deﬁnition 1.2.7</span></strong></em> <em>R&eacute;cursivit&eacute; terminale :</em></p>

<blockquote>
<p>On dit qu&rsquo;un fonction est r&eacute;cursive terminale, si tout appel r&eacute;cursif est de la forme return f(...)</p>
</blockquote>

<p><em><strong><span style="font-size:14px">Remarque 1.2.8 </span></strong></em></p>

<blockquote>
<p>Cette forme de r&eacute;cursivit&eacute; est b&eacute;n&eacute;ﬁque pour la gestion de l&rsquo;espace m&eacute;moire de la fonction.&nbsp;</p>
</blockquote> `,
        tagChapter: [
          {tagName: 'tri', id: '1'},
          {tagName: 'avl', id: '8'},
          {tagName: 'pointeur', id: '5'},
        ],
      },
      {
        id: '2',
        chapterName: 'pointeur',
        volumeHoraire: 12,
        Niveau: 3,
        content: '',
        tagChapter: [
          {tagName: 'tri', id: '1'},
          {tagName: 'pointeur', id: '5'},
        ],
      },
      {
        id: '3',
        chapterName: 'Liste chainée',
        volumeHoraire: 10,
        Niveau: 4,
        content: '',
        tagChapter: [
          {tagName: 'pile', id: '3'},
          {tagName: 'avl', id: '8'},
          {tagName: 'file', id: '4'},
        ],
      },
      {
        id: '4',
        chapterName: 'Arbre',
        volumeHoraire: 8,
        Niveau: 5,
        content: '',
        tagChapter: [
          {tagName: 'arbre', id: '6'},
          {tagName: 'pile', id: '3'},
          {tagName: 'pointeur', id: '5'},
          {tagName: 'file', id: '4'},
        ],
      },
      {
        id: '5',
        chapterName: 'Hachage',
        volumeHoraire: 8,
        Niveau: 5,
        content: '',
        tagChapter: [
          {tagName: 'complexite', id: '2'},
          {tagName: 'pointeur', id: '5'},
          {tagName: 'pile', id: '3'},
        ],
      },
      {
        id: '6',
        chapterName: 'Arbre binare de recherche',
        volumeHoraire: 12,
        Niveau: 3,
        content: '',
        tagChapter: [
          {tagName: 'complexite', id: '2'},
          {tagName: 'pointeur', id: '5'},
          {tagName: 'pile', id: '3'},
          {tagName: 'file', id: '4'},
        ],
      },
    ],
  },
};

const DisplayContent = ({tab, tags}) => {
  const [data, setData] = useState({
    currentData: tab.chapters,
    defaultData: tab.chapters,
  });
  const navigation = useNavigation();
  const filterbyTag = (id) => {
    if (id) {
      const filtredData = data.defaultData.filter((chapter) =>
        chapter.tags.some((tag) => tag.id === id),
      );
      setData({currentData: filtredData, defaultData: data.defaultData});
    } else
      setData({currentData: data.defaultData, defaultData: data.defaultData});
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Tags tags={tags} filterByTag={filterbyTag} />
      <View style={{flex: 1}}>
        <PreviewContent chapters={data.currentData} navigation={navigation} />
      </View>
    </View>
  );
};

export default DisplayContent;
