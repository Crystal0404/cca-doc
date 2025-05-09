import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from "@docusaurus/Translate";

const FeatureList = [
  {
    title: translate({id: 'homepage.feature.carpet.message', message: 'Carpet拓展'}),
    Svg: require('@site/static/img/more.svg').default,
    description: (
      <>
          <Translate id="homepage.feature.carpet.description">
              与Fabric Carpet一起工作,
              提供额外有趣的Carpet风格规则
          </Translate>
      </>
    ),
  },
  {
    title: translate({id: 'homepage.feature.vanilla.message', message: '原版'}),
    Svg: require('@site/static/img/vanilla.svg').default,
    description: (
      <>
          <Translate id="homepage.feature.vanilla.description">
              Crystal Carpet Addition 不会自行修改游戏的原版机制,
              除非用户显式配置启动了某些特性. 让 Minecraft 保持原版
          </Translate>
      </>
    ),
  },
  {
    title: translate({id: 'homepage.feature.compatible.message', message: '兼容'}),
    Svg: require('@site/static/img/puzzle.svg').default,
    description: (
      <>
          <Translate id="homepage.feature.compatible.description">
              几乎不会与其它mod产生冲突
          </Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
