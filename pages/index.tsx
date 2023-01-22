import { Cover, Inline, PadBox, Stack } from '@bedrock-layout/primitives';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Card = ({
  type,
  count,
  length,
  className,
}: {
  type: string;
  count: string;
  length: string;
  className?: string;
}) => (
  <PadBox padding="1rem" className={`card ${className}`}>
    <Stack gutter="1rem">
      <h4>{type}</h4>
      <div>{count}</div>
      <div className="card__length">
        {length}
        <br />
        km
      </div>
    </Stack>
  </PadBox>
);

export default function Home() {
  return (
    <>
      <Cover as="section" className="content">
        <PadBox padding={['4rem', '2rem']} className="main-content">
          <Stack gutter="4rem">
            <Stack gutter="2rem">
              <h1>
                PROVODÍNSKÁ ŠTRAPANDA <span className="highlight">2023</span>
              </h1>
              <h2>
                Sobota <strong>17. června 2023</strong>
                <br />
                <span className="subtitle">
                  Sportovní areál u&nbsp;nádraží Jestřebí
                </span>
              </h2>
            </Stack>
            <Stack gutter="1rem">
              <h3>Trasy</h3>
              <Inline
                gutter="2rem"
                stretch="all"
                switchAt="48rem"
                className="tracks-block"
              >
                <Card
                  type="Pěší"
                  count="3 trasy"
                  length="8 – 32"
                  className="card--hike"
                />
                <Card
                  type="Cyklo"
                  count="3 trasy"
                  length="20 – 60"
                  className="card--bike"
                />
              </Inline>
            </Stack>
            <PadBox
              as="a"
              padding={['0.5rem', '1rem']}
              className="contact"
              href="mailto:petr@provodinska-strapanda.cz"
            >
              <FontAwesomeIcon icon={faPaperPlane} /> Napište nám
            </PadBox>
          </Stack>
        </PadBox>
      </Cover>
      <section className=" history content">
        <PadBox padding={['4rem', '2rem']}>
          <Stack gutter="2rem">
          <h2 className="section-title">Z historie</h2>
          <div className="columns">
            <p>Historie Štrapandy se začala psát počátkem roku 1975. Skupinka místních milovníků dálkových pochodů, které se v&nbsp;té době staly velice populární náplní volného času, přišla s&nbsp;nápadem uspořádat vlastní akci.</p>
            <p>Otci pochodu se stali M. Hanuš, L. Kohoutek a&nbsp;tvůrce názvu&nbsp;J. Klazar. Postupně se k&nbsp;nim přidávali další a&nbsp;z&nbsp;organizačních důvodů vznikl v&nbsp;rámci TJ Jestřebí-Provodín odbor turistiky. Jeho náplní byly hlavně pochody a&nbsp;plnění úkolů oblastních odznaků po&nbsp;celé zemi. Turistika v&nbsp;obci sílila a&nbsp;její nedílnou součástí byl také oddíl TOM (turistický oddíl mládeže). Z&nbsp;jeho řad postupem doby rostli účastníci i&nbsp;členové štábu dalších ročníků Štrapandy.</p>
            <p>Jak Štrapanda „dospívala“, rostl i&nbsp;počet jejích účastníků. Z&nbsp;38 na 1. ročníku k&nbsp;překročení tisícovky v&nbsp;roce 1983. Součástí programu bývala také večerní setkání účastníků, původně u&nbsp;ohně a&nbsp;o&nbsp;něco později na tanečních zábavách, které byly velice oblíbené. Nějakou dobu na ně občas navazovaly také druhé etapy pochodu.</p>
            <p>Tradice, dobrá pověst Štrapandy i&nbsp;zkušenosti tehdejšího štábu vedeného panem Kommem byly důvodem, že byla provodínským v&nbsp;roce 1989 svěřena organizace nejprestižnější turistické akce každého roku – Poslední puchýř. Ten vždy uzavírá turistickou sezonu. V&nbsp;té době byla obec Jestřebí-Provodín nejmenším místem, kde se tahle akce pořádala.</p>
            <p>Kdy proběhla? 17.&nbsp;listopadu 1989. Tohle datum asi nezanikne, co?</p>
            <p>Tak jako pro celou zem, byl tento rok přelomem. Obnovila se činnost Klubu českých turistů a&nbsp;Provodínští se stali prvním odborem KČT na Českolipsku. Štrapanda mohla pokračovat. Trochu se obměnila sestava organizátorů, přibyli mladí. Také ale ubylo na nějakou dobu účastníků. Zájmy lidí se měnily a&nbsp;teprve po&nbsp;pár letech se účast stabilizovala znovu na sedmi až devíti stech turistech.</p>
            <p>Tak jak znovu rostl zájem o&nbsp;účast, postupně ubývalo těch, kdo by chtěli akci zajišťovat. Pro Štrapandu bylo dobré, že se jí v&nbsp;roce 2005 ujala nová skupina organizátorů a&nbsp;pochod mohl pokračovat. Důležité bylo, že Štrapanda přežila a&nbsp;udržela si zájem turistů dodnes.</p>
          </div>
          </Stack>
        </PadBox>
      </section>
      <PadBox as="footer" padding={['1rem', '2rem']} className="footer">
        Pořádá <FontAwesomeIcon icon={faHeart} color="#ee6352" />{' '}
        KČT&nbsp;Česká&nbsp;Lípa, OÚ&nbsp;Provodín
      </PadBox>
    </>
  );
}
