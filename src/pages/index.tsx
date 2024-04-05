/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Home.module.scss'
import Head from 'next/head'

export default function Home(){
    return (
    <div className={styles.home}>
    <Head>
        <title>Patrick Chaves</title>
    </Head>
        <div className={styles.banner}>
            <div className={styles.bannerBackground}>
            </div>
            <div className={styles.bannerText}>
                <span><span className={styles.pink}>function</span> <span className={styles.green}>wellcome</span>() {'{'}</span>
                <span style={{marginLeft: 40}}><span className={styles.pink}>const <span className={styles.gray}>message </span>:</span> 
                <span className={styles.blue}> string </span> = <span className={styles.yellow}>"Wellcome!! enjoy and discover my portfolio"</span></span>
                <span style={{marginLeft: 40}}><span className={styles.pink}>return</span> message</span>
                <span>{'}'}</span>
                <span style={{marginLeft: -5, marginTop: 5}} className={styles.writing}>|</span>
            </div>
        </div>
        <div className={styles.about}>
            <h1>{'<About>'}</h1>
            <p>
                Principais atividades:<br />
                - Desenvolvimento FullStack.<br />
                - Líderança de equipes de desenvolvimento.<br />
                - Consultoria.<br />
            </p>
            <h1>{'</About>'}</h1>
        </div>
        <div className={styles.about}>
            <h1>{'<Experiências>'}</h1>
                <p>
                    <b style={{fontSize: 24}}>Stefanini Brasil</b><br />
                    <span style={{marginLeft: 20}}></span>dezembro de 2023 - Present (5 meses)<br /><br />
                    <span style={{marginLeft: 20, fontSize: 22, fontWeight: 700}}>Analista Desenvolvedor Pleno</span><br />
                    <span style={{marginLeft: 20}}></span>* Ramo: Tecnologia da Informação (TI) | Segmento: Finanças<br />
                    <span style={{marginLeft: 20}}></span>* Atuo na equipe como FullStack<br />
                    <span style={{marginLeft: 20}}></span>* Stack Front varia de AngularJs a Angular 15, DesignSystem próprio do BB e frameworks para o Angular<br />
                    <span style={{marginLeft: 20}}></span>* Stack Back: Java com framework Quarkus<br />
                </p>
                <br />
                <p>
                    <b style={{fontSize: 24}}>Vox Tecnologia</b><br />
                    <span style={{marginLeft: 20}}></span>2 anos 4 meses<br /><br />

                    <span style={{marginLeft: 20, fontSize: 22, fontWeight: 700}}>Desenvolvedor Pleno III</span><br />
                    <span style={{marginLeft: 20}}></span>julho de 2023 - dezembro de 2023 (6 meses)<br />
                    <span style={{marginLeft: 20}}></span>* Ramo: Tecnologia da Informação (TI) | Segmento: Gestão Pública<br />
                    <span style={{marginLeft: 20}}></span>* Atuo na equipe de Arquitetura<br />
                    <span style={{marginLeft: 20}}></span>* A stack varia de Angular 6 a 12, Bootstrap, DSGOV, tudo em interação com Symfony (PHP), seja via REST API ou Twig, Zend (PHP) com PHTML.<br />
                    <span style={{marginLeft: 20}}></span>* Participei do desenvolvimento do novo portal, com maior performance, design atualizado e acessibilidade.<br />
                    <span style={{marginLeft: 20}}></span>* Participei da implementação do sistema do balcão único, onde o cliente abre a empresa em um fluxo contínuo, sem necessidade de aguardar aprovação em cada etapa.<br />
                    <span style={{marginLeft: 20}}></span>* Participei na implementação de testes unitários nos projetos Angular<br />
                    <span style={{marginLeft: 20}}></span>* Participei na refatoração, manutenção de Libs próprias feitas em Angular<br />
                    <span style={{marginLeft: 20}}></span>* Participei na criação do novo assinador digital<br />
                    <span style={{marginLeft: 20}}></span>* Participei na implementação/integração de libs js nos projetos Angular.<br /><br />

                    <span style={{marginLeft: 20, fontSize: 22, fontWeight: 700}}>Desenvolvedor Pleno II</span><br />
                    <span style={{marginLeft: 20}}></span>maio de 2022 - julho de 2023 (1 ano 3 meses)<br /><br />

                    <span style={{marginLeft: 20, fontSize: 22, fontWeight: 700}}>Desenvolvedor de front-end</span><br />
                    <span style={{marginLeft: 20}}></span>setembro de 2021 - maio de 2022 (9 meses)<br />
                    <span style={{marginLeft: 20}}></span>João Pessoa, Paraíba, Brasil<br />
                    <span style={{marginLeft: 20}}></span>* Ramo: Tecnologia da Informação (TI) | Segmento: Gestão Pública<br />
                    <span style={{marginLeft: 20}}></span>* Atuo na equipe de Front-end, no qual tenho trabalhado no sistema Sigfácil.<br />
                    <span style={{marginLeft: 20}}></span>* A stack varia de Angular 6+ e Bootstrap em interação com Symfony (PHP), seja em API ou Twig, Zend (PHP).<br />
                    <span style={{marginLeft: 20}}></span>* Participei do desenvolvimento do novo portal, com maior performance, design atualizado e acessibilidade.<br />
                    <span style={{marginLeft: 20}}></span>* Participei da implementação do sistema do balcão único, onde o cliente abre a empresa em um fluxo contínuo, sem necessidade de aguardar aprovação em cada etapa.<br />
                </p>
            <h1>{'</Experiências>'}</h1>
        </div>
        <div className={styles.others}>
            <div className={styles.stacks}>
                <span className={styles.pink}>let <span className={styles.gray}>principaisStacks = [</span></span>
                <span className={styles.yellow+' '+styles.margin1}>"JavaScript"<span className={styles.gray}>,</span></span>
                <span className={styles.yellow+' '+styles.margin1}>"Typescript"<span className={styles.gray}>,</span></span>
                <span className={styles.yellow+' '+styles.margin1}>"Angular"<span className={styles.gray}>,</span></span>
                <span className={styles.yellow+' '+styles.margin1}>"React"<span className={styles.gray}>,</span></span>
                <span className={styles.yellow+' '+styles.margin1}>"NextJs"<span className={styles.gray}>,</span></span>
                <span className={styles.yellow+' '+styles.margin1}>"VueJs"<span className={styles.gray}>,</span></span>
                <span className={styles.yellow+' '+styles.margin1}>"NodeJs"<span className={styles.gray}>,</span></span>
                <span className={styles.yellow+' '+styles.margin1}>"Java"<span className={styles.gray}>,</span></span>
                <span className={styles.yellow+' '+styles.margin1}>"Postgres/MySql"<span className={styles.gray}>,</span></span>
                <span className={styles.yellow+' '+styles.margin1}>"MongoDb"<span className={styles.gray}>,</span></span>
                <span className={styles.yellow+' '+styles.margin1}>"Docker"<span className={styles.gray}>,</span></span>
                <span className={styles.yellow+' '+styles.margin1}>"Socket.io"<span className={styles.gray}>,</span></span>
                <span className={styles.gray}>]</span>
            </div>
            <div className={styles.academic}>
                <span className={styles.pink}>let <span className={styles.gray}>Formação</span> = <span className={styles.gray}>[</span></span>
                <span className={styles.yellow+' '+styles.margin1}>"Sistemas para Internet"<span className={styles.pink}> : </span><span className={styles.gray}>{'{'}</span></span>
                <span className={styles.gray+' '+styles.margin2}>Universidade<span className={styles.pink}> : </span><span className={styles.yellow}>"Estácio de Sá"</span>,</span>
                <span className={styles.gray+' '+styles.margin2}>Inicio<span className={styles.pink}> : </span><span className={styles.lightblue}>2021</span>,</span>
                <span className={styles.gray+' '+styles.margin2}>Termino<span className={styles.pink}> : </span><span className={styles.lightblue}>2023</span></span>
                <span className={styles.gray+' '+styles.margin1}>{'}'},</span>
                <span className={styles.yellow+' '+styles.margin1}>"Educação Física - Bacharelado"<span className={styles.pink}> : </span><span className={styles.gray}>{'{'}</span></span>
                <span className={styles.gray+' '+styles.margin2}>Universidade<span className={styles.pink}> : </span><span className={styles.yellow}>"UNIASSELVI"</span>,</span>
                <span className={styles.gray+' '+styles.margin2}>Inicio<span className={styles.pink}> : </span><span className={styles.lightblue}>2018</span>,</span>
                <span className={styles.gray+' '+styles.margin2}>Termino<span className={styles.pink}> : </span><span className={styles.lightblue}>2019</span></span>
                <span className={styles.gray+' '+styles.margin1}>{'}'}</span>
                <span className={styles.yellow+' '+styles.margin1}>"Educação Física - Licenciatura"<span className={styles.pink}> : </span><span className={styles.gray}>{'{'}</span></span>
                <span className={styles.gray+' '+styles.margin2}>Universidade<span className={styles.pink}> : </span><span className={styles.yellow}>"UNIPÊ"</span>,</span>
                <span className={styles.gray+' '+styles.margin2}>Inicio<span className={styles.pink}> : </span><span className={styles.lightblue}>2015</span>,</span>
                <span className={styles.gray+' '+styles.margin2}>Termino<span className={styles.pink}> : </span><span className={styles.lightblue}>2018</span></span>
                <span className={styles.gray+' '+styles.margin1}>{'}'}</span>
                <span className={styles.gray}>]</span>
            </div>
        </div>
    </div>
    )
}