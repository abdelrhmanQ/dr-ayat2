import { Fragment } from 'react';
import FadeContent from './FadeContent';
import './FadeContentDemo.css';

const sections = [
  {
    eyebrow: '01 - The Poet',
    title: 'Sir Thomas Wyatt',
    paragraphs: [   
      'He was born in kent-england he was a famous english poet and diplomat.  He worked for King Henry VIII as a diplomat and then travelled to italy and learned from italian poets like Francesco Petrarca and was highly influenced by his work such as the form of the petrarchian sonnet. He wrote alot of famous poems one of wich is “Whoso List to Hunt” wich shows to us what kind of poetry the Sir Thomas Wyatt wrote'
    ],
    image: '/images/Thomas-Wyatt.jpeg',
    alt: 'Portrait of Sir Thomas Wyatt',
    textEffect: 'mist',
    imageEffect: 'focus'
  },
  {
    eyebrow: '02 - Poetry',
    title: 'Whoso List to Hunt',
    paragraphs: [
      {
        text: 'Whoso list to hunt, I know where is an hind , But as for me, helas, I may no more . The vain travail hath wearied me so sore ,I am of them that farthest cometh behind.',
      },
      {
        text: 'Yet may I by no means my wearied mind Draw from the deer, but as she fleeth afore Fainting I follow. I leave off therefore, Sithens in a net I seek to hold the wind.',
      },
      {
        text: 'Who list her hunt, I put him out of doubt, As well as I may spend his time in vain. And graven with diamonds in letters plain There is written, her fair neck round about : Noli me tangere, for Caesars I am ,And wild for to hold, though I seem tame ',
      }
    ],
    image: '/images/poet.png',
    alt: 'Illustration for the poem Whoso List to Hunt',
    textEffect: 'fade',
    imageEffect: 'develop'
  },
  {
    eyebrow: '03 - Petrarchan ',
    title: 'The Petrarchan Sonnet',
    paragraphs: [
      'The Petrarchan sonnet originated in Italy. It was developed by the Italian poet Francesco Petrarca (Petrarch) in the 14th century. It later influenced English poets, including Sir Thomas Wyatt and Henry Howard, who introduced the sonnet into English poetry in the 16th century . the petrarchian sonnet is a sonnet contains of 14 lines devided into octave and a sestet rhyming as ABBA-ABBA-CDDC-EE',
    ],
    image: '/images/Petrarchan.png',
    alt: 'Petrarchan sonnet structure diagram',
    textEffect: 'mist',
    imageEffect: 'pixel'
  },
   {
    eyebrow: '04 - Analysis',
    title: 'Form, Themes and Techniques',
    paragraphs: [
      {
        text: 'A 14-line sonnet in mainly iambic pentameter, rhyming ABBA ABBA CDDC EE. It has an octave (two quatrains) and a sestet (a quatrain and a couplet).',
        note: 'Some lines have irregular stresses.'
      },
      {
        text: 'Main themes: unattainable love, desire and frustration, power and ownership, and giving up after repeated failure.'
      },
      {
         text: 'Techniques:'
      },
      {
        text: 'Techniques: the metaphor “Sithens in a net I seek to hold the wind” (the impossible), '
      },
      {
        text: 'the hind as a symbol of the woman,'
      },
      {
        text: 'the imagery of “Fainting I follow”,'
      },
      {
        text: 'enjambment in lines 5–6, and emotive language such as “The vain travail hath wearied me so sore”.'
      }
    ],
    image: '/images/theme.png',
    alt: 'Illustration for the analysis of the poem',
    textEffect: 'mist',
    imageEffect: 'pixel'
  },
     {
    eyebrow: '05 - Volta.',
    title: 'The Turn in the Poem',
    paragraphs: [
      'Introduce - Lines 1-4: The speaker introduces the hunt.',
      'Develop - Lines 5-8: The speaker struggles to catch the deer and decides to give up.',
      'Turn - Lines 9-12: The speaker warns hunters that chasing the deer is useless',
      'Conclude - Lines 13-14: The collar reveals that the deer belongs to',

    ],
    image: '/images/aaa.jfif',
    alt: 'volta',
    textEffect: 'mist',
    imageEffect: 'pixel'
  },
    {
    eyebrow: '06 - Q&A',
    title: 'Any Questions?',
    paragraphs: [
      'any questions about the poem or the poet? feel free to ask me anything and i will be happely do my best'
    ],
    image: '/images/qq.png',
    alt: 'Qimage',
    textEffect: 'fade',
    imageEffect: 'develop'
  },
  {
    eyebrow: '06 - Conclusion',
    title: 'Thank you Dr. Ayat for your time and effort with us',
    titleStyle: { textAlign: 'center', color: '#f0ede2', fontWeight: 'bold', fontFamily: 'sans-serif' },
    textStyle: { textAlign: 'center' },
    paragraphs: [],
    image: '/images/th.png',
    alt: 'thanks image',
    textEffect: 'fade',
    imageEffect: 'develop'
  },
  
];

export default function FadeContentDemo() {
  return (
    <main className="page">
      {sections.map((s, i) => (
        <section className="section" key={s.title}>
          <FadeContent
            effect={s.textEffect}
            trigger={i === 0 ? 'mount' : 'scroll'}
            duration={1.8}
            ease="power2.out"
            stagger={0.12}
            threshold={0.1}
            className="text"
            style={s.textStyle}
          >
            <span className="eyebrow">{s.eyebrow}</span>
            {i === 0 ? (
              <h1 style={s.titleStyle}>{s.title}</h1>
            ) : (
              <h2 style={s.titleStyle}>{s.title}</h2>
            )}
            {s.paragraphs.map(item => {
              const text = typeof item === 'string' ? item : item.text;
              const note = typeof item === 'string' ? null : item.note;
              return (
                <Fragment key={text.slice(0, 24)}>
                  <p>{text}</p>
                  {note && <p className="note">{note}</p>}
                </Fragment>
              );
            })}
          </FadeContent>

          <FadeContent
            effect={s.imageEffect}
            duration={1.8}
            ease="power2.out"
            threshold={0.1}
            className="media"
          >
            <img src={s.image} alt={s.alt} loading="lazy" />
          </FadeContent>
        </section>
      ))}

      <footer className="footer">Developed by Abdelrahman Khaled | Written by Saif al-Din Muhammad</footer>
    </main>
  );
}