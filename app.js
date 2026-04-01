// Base de datos de las canciones (Añade el resto siguiendo este formato)
const songs = [
    {
        const songs = [
    {
        title: "Dulce Doncella",
        content: `[DO] [MI7] [LAm]
Estamos vivos y vivimos
[FA] [SOL]
amar es nuestro destino
[DO] [MI7] [LAm] [FA]
aunque este viaje es distinto, solo hay un
[SOL] [DO]
solo camino, llegar a vos

[MI7]-[LAm]-[FA]-[SOL]

[DO] [MI7] [LAm] [FA] [SOL] [DO] [MI7]
Dulce doncella, te seguiré, tu eres mi
[LAm] [FA] [SOL] [DO]
estrella, te alcanzaré, yo sé que si

[MI7]-[LAm]-[FA]-[SOL]

Sólo quedó hierba seca
por donde antes pisamos
hoy hay flores de pureza
porque hacia ti caminamos espéranos`
    },
    {
        title: "Gloria a Dios",
        content: `[SOL] [RE] [SOL]
Gloria a Dios en el cielo
[DO] [RE] [SOL] [DO] [RE] [SOL]
y en la tierra, paz a los hombres.

[SI7] [MIm] [RE] [SI7] [MIm]
Gloria a Dios Padres Nuestro, poder y amor
[LA7] [LA7] [RE]
que hiciste de la nada, la creación.
[DOm] [SOL] [LA7] [RE]
Y por salvar al mundo de su pecado
[DO] [RE] [SOL] [DO] [RE] [SOL]
enviase desde el cielo a tu hijo amado.`
    },
    {
        title: "Gloria a Dios, Gloria al Padre",
        content: `Gloria a Dios, Gloria a Dios,
Gloria al Padre.
A Él que sea la gloria.
Aleluya amén.

Gloria a Dios, Gloria a Dios,
Gloria al hijo.
A Él que sea la Gloria.
Aleluya amén.

Gloria a Dios, Gloria a Dios,
Espíritu Santo.
A Él que sea la Gloria
Aleluya amén.`
    },
    {
        title: "Aleluya",
        content: `[DO]
¡Aleluya, gloria Aleluya!
[LAm]
¡Aleluya, gloria Aleluya!
[FA]
¡Aleluya, gloria Aleluya!
[SOL]
¡Aleluya, gloria Aleluya!

Cantad alegres, cantad a Dios
habitantes de toda la tierra
Servid a Dios con alegría
llegad a Él con regocijo

Gloria a vos Jesucristo, Dios hecho hombre
que llevaste en tu carne nuestros dolores.
Que venciste a la muerte, crucificado
y reinas junto al Padre, Resucitado.

Gloria a vos Santo Espíritu, viento y fuego,
que hiciste de los pueblos, un solo pueblo.
Que animas a tu iglesia, con tu aliento
para que anuncie al mundo, el evangelio.`
    },
    {
        title: "Quiero ser Pan",
        content: `[RE] [LA] [SIm] [FA#m]
Es joven el que espera, el que sabe caminar,
[SOL] [RE] [MI] [LA]
El que lucha por el Reino sin volver la vista atrás.
[RE] [LA] [FA#m] [SIm]
El que da su mano a otro, el que sabe transformar,
[SOL] [RE] [MI] [LA]
El que es pan para los pobres defendiendo la verdad.

[RE] [LA]
QUIERO SER PAN, PARA EL HAMBRE
[SIm] [FA#m] [SOL]
SER EL PAN, DE MI PUEBLO Y CONSTRUIR
[MI] [LA]
EL ESCÁNDALO DE COMPARTIR. (bis)

Es joven el que arriesga, el que sabe caminar,
el que siempre se pregunta sin volver la vista atrás.
El que sabe hacer historia, el que sabe transformar,
el que es voz de los pequeños defendiendo la verdad.

El que sigue a Jesús pobre, el que sabe caminar,
El que apoya la justicia sin volver la vista atrás.
El que vive siempre abierto, el que sabe transformar,
El que canta con los otros, defendiendo la verdad.`
    },
    {
        title: "Santo",
        content: `[DO] [FA] [DO] [SOL]
Santo, Santo, Santo es el Señor
[DO] [FA] [DO] [SOL] [DO] [SOL] [DO]
Santo, Santo, Santo es el Señor

[DO] [FA]
Hosana a Él, Hosana a Él,
[SOL] [DO]
Hosana Cristo el Señor.

[DO] [FA]
Hosana a Él, Hosana a Él,
[DO] [SOL]
Hosana Cristo el Señor.`
    },
    {
        title: "Padre nuestro en ti creemos",
        content: `[LA] [FA#m]
En el mar he oído hoy, Señor tu voz que me llamó
[RE] [MI]
y me pidió que me entregara a mis hermanos.

[LA] [FA#m]
Esa voz que transformó, mi vida entera ya cambió
[RE] [MI]
y solo pienso ahora, Señor, en repetirte:

[LA]
Padre Nuestro, en ti creemos,
[FA#m]
Padre Nuestro, te ofrecemos,
[RE] [MI]
Padre Nuestro, nuestras manos, de hermanos
(ORACIÓN DEL PADRE NUESTRO)

Cuando vaya a otros lugares, tendré yo que abandonar
a mi familia, a mis amigos, por seguirte.
Pero se que si algún día por enseñar tu verdad
a mi hermano y junto al él yo repetirte:`
    },
    {
        title: "Cordero",
        content: `[REm] [DO] [REm] [REm] [DO] [REm]
Cordero de Dios, Cordero de Dios,
[FA] [DO] [FA]
que quitas el pecado del mundo
[SOLM] [LA] [REm]
ten piedad de nosotros

Cordero de Dios, Cordero de Dios,
que quitas el pecado del mundo
ten piedad de nosotros.

[REm] [DO] [REm] [REm] [DO] [REm]
Cordero de Dios, Cordero de Dios,
[DO] [SOL] [DO] [FA] [DO] [FA]
que quitas el pecado del mundo
[SOLM] [LA] [REm] [SOLM] [LA] [RE]
danos la paz, danos la paz.

Los cielos y la tierra están llenos
de tu Gloria Señor (x2)
Bendito es el que viene
en el nombre del Señor (x2)`
    },
    {
        title: "Vida en abundancia",
        content: `[MI] [LA] [SI7]
Los lirios del campo y las aves del cielo
[LA] [MI] [SI7]
No se preocupan porque están en mis manos
[DO#m] [LA] [MI] [SI7]
Tené confianza en mí, acá estoy junto a vos.

Amá lo que sos y tus circunstancias
Estoy con vos, con tu cruz en mi espalda
Todo terminará bien, Yo hago nuevas todas las cosas

[DO#m] [LA] [MI] [SI7]
Yo vengo a traerte vida,
[DO#m] [LA] [SI7]
Vida en abundancia, en abundancia
[DO#m] [LA]
Yo soy el camino, la verdad y la vida
[SI7] [MI] [SI7] [DO#m] [LA]
Vida en abundancia, en abundancia

Sentite vivo la fiesta del reino comienza acá`
    },
    {
        title: "Esto que soy (arranque escalonado)",
        content: `[MI]
A veces me pregunto ¿porqué yo?,
[DO#m]
y sólo me respondes porque quiero.
[LA]
Es un misterio grande que nos llames,
[MI]
así tal como somos a tu encuentro.

Entónces redescubro una verdad,
mi vida, nuestra vida es un tesoro.
Se trata entónces sólo de ofrecerte,
con todo nuestro amor, esto que somos.

[SI] [DO#m]
¿QUÉ TE DARE, QUE TE DAREMOS?,
[LA] [MI]
SI TODO, TODO ES TU REGALO.
[SI] [DO#m]
TE OFRECERE, TE OFRECEREMOS,
[LA] [SOL#m] [SI] [MI]
ESTO QUE SOMOS... ESTO QUE SOY, ESO TE DOY.

Esto que soy, esto es lo que te doy.
Esto que somos, es lo que te damos.
Tú no desprecias nuestra vida humilde
se trata de poner todo en tus manos.

Aquí van mis trabajos y mi fe
mis mates, mis bajones y mis sueños,
y todas las personas que me diste
desde mi corazón te las ofrezco`
    },
    {
        title: "Auxiliadora que linda eres",
        content: `[MIm]
Para celebrar tu día
[LAm]
se abrieron todas las flores
[SI7]
y entonaron los cantores
[MIm]
un concierto de alegría. (bis)

[LAm] [MIm]
Auxiliadora, qué linda eres,
[SI7] [MIm]
dejanos, Madre, tu bendición.

[LAm] [MIm]
Auxiliadora, qué linda eres,
[SI7] [MIm]
dejanos, Madre, tu bendición.

No olvides a mi nación,
bendita, Virgen bendita,
porque con fuerza infinita,
revivió mi corazón.`
    },
    {
        title: "Rendid a Yahvé",
        content: `[MI] [LA]
Rendid a Yahvé santos del Señor
[MI] [SI7]
Gloria y poder al que hace la creación
[MI] [LA]
Rendid honor al glorioso Nombre del Señor
[MI] [SI7] [MI]
Y adorarlo en su santo esplendor

[MI] [LA] [MI]
Sobre los mares resuena la voz de Dios
[LA] [SI7]
Glorioso es Dios su voz hace temblar
[MI] [LA] [MI]
Que poderosa es la voz del Altísimo
[LA] Aleluya [SI7] [MI]
Su voz descuaja los cedros del Líbano
[LA] Aleluya [SI7] [MI]
La voz del Señor lanza llamas de fuego
[LA] Aleluya [SI7] [MI]
Sacude los bosques la voz del Altísimo
[LA] Aleluya [SI7] [MI] [LA] [MI]
Y en su santuario gritan gloria

Sentado está Dios sobre la tempestad
Sentado está Yahvé cual Rey Eterno
La fuerza da al que pone su confianza en Él
Yahvé bendice a su pueblo con paz`
    },
    {
        title: "Mar adentro",
        content: `[MI] [LA]
Es hora de partir
[MI] [SI7]
mar adentro y no voy a esperar.
[MI] [LA]
El vendrá para ir
[MI] [SI7] [MI]
y yo no quiero hacerlo esperar.

El ya está junto a mí
y sus ojos derraman ternura.
El espera mi si
y yo no quiero hacerlo esperar.

[MI] [LA] [MI] [SI7]
Quiero sentir tu amor y volver a nacer,
[DO#m] [LA] [MI] [SI7]
quiero decirte ven mi barca es tuya.

[MI] [LA] [MI] [SI7]
Es tan inmenso el mar pero yo voy con vos,
[DO#m] [LA] [MI]
no temo navegar si está mi Dios.

Quiero ser como vos
y ser pan que se deja comer.
Quiero que los demás
vean en mí tu sonrisa Señor.

Quiero ser manantial
que da vida donde quiera que vaya,
quiero llevar tu luz
a ese mundo que no habla de Dios.`
    },
    {
        title: "Candombe del Oratorio",
        content: `[LAm] [MI] [MI7] [LAm]
Venimos de todas partes, queremos vivir alegres,
[LA7] [LAm] [REm]
cantamos porque nos gusta, y ahora gritamos con
[MI7] [LA]
toda el alma y toda la voz.

[LA]
VENIMOS PORQUE DON BOSCO ES UN PADRE
[MI]
BUENO Y NOS QUIERE A TODOS,
NOS LLAMA A VIVIR UNIDOS EN ESTA FIESTA
[LA]
DEL ORATORIO.

[LA7]
CON JESÚS Y CON MARÍA SENTIMOS MUCHA,
MUCHA ALEGRÍA
[RE] [LA]
LOS JUEGOS Y LAS CANCIONES VAN
[MI]
AGRANDANDO NUESTRA AMISTAD.

Si andamos un poco tristes,
o somos medio bandidos,
sabemos que con cariño,
Don Bosco mismo sale a la calle
y nos va a buscar

Sentimos que nuestro padre,
Don Bosco, siempre sonriente,
nos mira desde su cielo,
y hace cien años
que cada día nos quiere más`
    },
    {
        title: "Tú nos transformas, Señor",
        content: `[LA] [MI]
Te ofrecemos nuestras obras,
[FA#m] [RE]
la alegría y el dolor,
[LA]
nuestras manos
[MI] [LA] [MI]
que lucharon por tu amor.

Hoy venimos a tu mesa,
para compartir tu pan,
y trayendo en nuestras manos la unidad.

[LA] [MI] [FA#m]
Tú nos transformarás, Señor,
nos transformarás.
[RE] [DO#m] [MI] [LA] [MI]
Tú nos transformarás, Señor. (2)

Tú compartes nuestras vidas,
y te entregas otra vez.
Tú me llevas de la mano para ser,
un hermano un amigo,
que da la vida también,
y así poder entregarme como Tú.`
    },
    {
        title: "Esperanza",
        content: `[SOL] [RE] [MIm] [SIm]
Hoy al fin tenemos que seguir,
[DO]
caminando en paz,
[LAm] [RE]
esperamos contra toda esperanza.

Al saber que todo va a cambiar,
Resucitarás,
esperamos contra toda esperanza.

[SOL] [MIm]
Vos sos la vida, sos la paz,
[DO] [RE]
vos sos nuestra esperanza.
Sos el camino para andar,
sos fuerza y sos confianza.

No aflojar, seguirte hasta el final,
tu cruz abrazar,
esperamos contra toda esperanza.

Al saber que vos vas a volver,
a Resucitar,
esperamos contra toda esperanza.

Al sentir, Jesús estás aquí,
esperándonos,
esperamos contra toda esperanza.

Esperar, también es transformar,
un sueño en realidad,
esperamos contra toda esperanza.

Hay un sol, la noche ya aclaró,
ven a caminar,
esperamos contra toda esperanza.

Estarás sonriente a nuestra par,
no nos dejarás,
esperamos contra toda esperanza.`
    },
    {
        title: "El Dios de la Vida",
        content: `[DO] [SOL]
Somos un nuevo pueblo,
[LAm] [MIm]
gestando un mundo distinto,
[FA] [DO]
los que en el amor creemos,
[RE] [SOL]
los que en el amor vivimos.

Llevamos este tesoro,
en vasijas de barro,
es un mensaje de cielo,
y nadie podrá callarnos.

Y proclamamos un nuevo día,
porque la muerte ha sido vencida.
Y anunciamos esta buena noticia,
hemos sido salvados,
por el Dios de la Vida.

[FA] [SOL]
En el medio de la noche
[DO] [MIm] [LAm]
encendemos una luz
[FA] [SOL] [DO]
en el nombre de Jesús. (bis)

Sembradores del desierto,
buenas nuevas anunciamos,
extranjeros en un mundo,
que no entiende nuestro canto.

Y si a veces nos cansamos,
nunca nos desalentamos,
porque somos peregrinos,
y es el amor nuestro camino.

Y renunciamos a la mentira,
vamos trabajando por la justicia,
y rechazamos toda idolatría,
sólo creemos en el Dios de la Vida.`
    },
    {
        title: "Secuencia de Pascua",
        content: `[DO] [REm7]
Ofrezcan los cristianos
[FA] [DO]
ofrendas de alabanzas
[LAm] [REm]
a gloria de la víctima
[SOL] [DO]
propicia de la Pascua.

Cordero sin pecado
Que a las ovejas salva
A Dios y a los culpables
Unió con Nueva Alianza.

[DO7] [FA]
¡Y Aleluya, Aleluya
[SOL] [MIm]
la Vida se levanta!
[LAm] [REm]
¡Resucitó de veras
[SOL] [DO]
mi amor y mi esperanza! (x2)

Lucharon vida y muerte
en singular batalla
y muerto el qué es la Vida
triunfante se levanta.

¿Qué has visto de camino
María, en la mañana?
A mi Señor glorioso
la tumba abandonada,
los ángeles testigos
sudarios y mortaja.

¡Y Aleluya, Aleluya...

Vayan a Galilea
que allí el Señor aguarda.
Allí veréis los suyos
la gloria de la Pascua.

Primicia de los muertos
sabemos por tu gracia
que estás resucitado,
la muerte en ti no manda.

Rey vencedor, apiádate
de la miseria humana
y da a tus fieles parte
en tu victoria santa.

¡Y Aleluya, Aleluya...`
    },
    {
        title: "Eso que tu me das",
        content: `Intro: [DO] [FA7] [DO] [SOL7]

[DO] [SOL]
Eso que tú me das
[FA7] [DO]
es mucho más de lo que pido
[REm] [FA]
todo lo que me das
[FA7] [SOL7]
es lo que ahora necesito.

[DO] [SOL]
Eso que tú me das
[FA7] [DO]
no creo lo tenga merecido
[REm] [FA]
por todo lo que das
[REm] [SOL7]
te estaré siempre agradecido.

[LA7] [REm]
Así que gracias por estar
[SI7] [MIm]
por tu amistad y tu compañía
[DOmaj7]
eres lo, lo mejor que me ha dado la vida.

[DO] [SOL]
Por todo lo que recibí
[FA7] [DO]
estar aquí vale la pena
[RE] [FA]
gracias a ti seguí
[REm] [SOL7]
remando contra la marea

[DO] [SOL]
Con todo lo que recibí
[FA7] [DO]
ahora sé que no estoy solo
[REm] [FA]
ahora te tengo a ti
[REm] [SOL7]
amigo mio mi tesoro.

[LA7] [REm]
Así que gracias por estar
[SI7] [MIm]
por tu amistad y tu compañia
[DOmaj7]
eres lo, lo mejor que me ha dado la vida.

[RE] [LA]
Todo te lo voy a dar
[SOL7] [RE]
por tu calidad y tu alegría
[SOL] [MIm]
me ayudaste a remontar
[LA7]
a superarme día a día.

[RE] [LA]
Todo te lo voy a dar
[SOL] [RE]
fuiste mi mejor medicina
[SOL] [MIm]
todo te lo daré
[SOL] [LA7]
sea lo que sea lo que pidas.

[RE] [LA]
Y eso que tu me das
[SOL7] [RE]
es mucho mas
[SOL] [MIm]
es mucho más
[SOL] [LA7]
de lo que nunca te he pedido.

[RE] [LA]
Todo lo que me das
[SOL7] [RE]
es mucho mas
[SOL] [MIm]
es mucho más
[LA7] [DO]
de lo que nunca he merecido.`
    },
    {
        title: "Alma misionera",
        content: `[MI] [SI7] [DO#m]
Señor, toma mi vida nueva,
[LA] [MI]
antes de que la espera
[FA#m] [SI7]
desgaste años en mí.
[MI] [SI7] [DO#m]
Estoy, dispuesto a lo que quieras,
[LA] [MI]
no importa lo que sea,
[SI7] [MI]
Tú llámame a servir.

[MI] [SI7]
LLÉVAME DONDE LOS HOMBRES,
[DO#m] [LA]
NECESITEN TUS PALABRAS,
[MI] [FA#m] [SI7]
NECESITEN MIS GANAS DE VIVIR.
[MI] [SI7]
DONDE FALTE LA ESPERANZA,
[DO#m] [LA]
DONDE TODO SEA TRISTE, SIMPLEMENTE,
[MI] [SI7] [MI]
POR NO SABER DE TI.

Te doy, mi corazón sincero,
para gritar sin miedo
lo hermoso que es tu amor.
Tendré, mis manos sin cansancio.
Tu historia entre mis labios,
y fuerza en la oración.
Y así, en marcha iré cantando,
por calles predicando,
tu grandeza Señor.

Señor, tengo alma misionera,
condúceme a la tierra
que tenga sed de Dios.`
    },
    {
        title: "Ven y danos vida",
        content: `[DO] [REm] [SOL] [FA] [DO] [REm] [SOL] [FA]

[DO] [REm] [SOL] [FA]
Nos juntamos en Tu nombre,
[DO] [REm] [SOL] [FA] [DO]
mendigamos de ese pan que Vos nos das.
[REm] [SOL] [FA]
Es Tu cuerpo el que se entrega
[DO] [REm] [SOL] [FA] [REm]
y que une a Tu Iglesia al comulgar.

[SOL]
Es tu presencia
[DO] [MIm] [LAm]
la que nos va a salvar
[SOL] [FA] [SOL] [FA]
Por eso juntos te pedimos

[FA]
Ven y danos vida
[DO] [SOL]
la alegría de tu Amor.
[DO] [FA]
Es que Vos sos Jesús Dios vivo
[DO] [SOL]
el Pan de Vida que se nos dio.

[DO] [REm] [SOL] [FA] [DO] [REm] [SOL] [FA]

Anunciamos Tu venida,
[DO] [REm] [SOL] [FA]
proclamamos Tu palabra de Verdad.
[REm] [SOL] [FA]
Queremos saciar el hambre
[DO] [REm] [SOL] [FA] [REm]
que tienen todos los hombres de amar.`
    },
    {
        title: "Lo que agrada a Dios",
        content: `INTRO: [DO]...[LAm]... [FA]...[SOL]...[DO]...

[DO] [LAm] [(RE-SIm)]
Lo que Agrada a Dios, En mi pequeña alma.
[FA] [SOL] [DO]
Es que ame mi pequeñez y mi pobreza. (Bis)

[DO7] [FA] [SOL] [MIm] [LAm] [(RE-SOL-LA-RE-FA#m-SIm7)]
Es la esperanza, cie...ga
[FA] [SOL7] [DO] [DO7] [(SOL-LA7-RE-RE7)]
que ten...go en su misericordia
[Bis] [(1LA7)]`
    },
    {
        title: "Emaús",
        content: `[D] [Bm] [A] [G]
Aquí vamos Jesús, caminando con Vos,
dando un paso, queriéndote elegir.
[D] [Bm] [G] [A]
Y es la tierra que late cuando cae la luz.

[D] [Bm] [G]
Es tu mirada radiante que descubre huellas
[A] [G]
de libertad, en nosotros
[D] [G] [A]
Tus palabras dibujan la esperanza
[Em]
y nos dicen que aquel que está en camino
[A] [A]
se mantiene vivo.

[D] [G]
Porque tu corazón habló el nuestro cantará.
[Bm] [F#m] [G] [A]
Porque tu corazón habló el nuestro cantará...

[D] [A] [G] [A]
Quédate con nosotros,
no te vayas del mundo Jesús.
[D] [A]
Quédate con nosotros,
[G] [A]
danos tu paz.

//[D] [A] [F#m] [G] [G]
Porque te reconocemos al partir el pan
[A]
Porque nos envías al partir el pan

[Bm] [D] [A]
Quédate con nosotros,
[G] [A]
no te vayas del mundo Jesús.
[D] [A]
Quédate con nosotros,
[G] [A]
danos tu paz,// (X2, segunda vez solo percu)
[G] [D]
danos tu paz (danos de tu paz...)`
    },
    {
        title: "Haciéndote pan",
        content: `[FA#m] [LA] [MI]
Comenzaste a hacerte pan en Belén,
[RE] [DO#m]
sol pequeñito en nuestra noche.
[FA#m] [LA] [MI]
Aprendiste en Nazaret, de ellos dos,
[RE] [DO#m]
el gesto manso de la entrega.

[FA#m] [RE]
Pibe que en Jerusalén
[MI] [RE]
te abrazaste de un vez
[MI] [FA#m] - [MI]
a las cosas de tu Padre,
[FA#m] [RE]
debe tu cuerpo crecer
[MI] [RE]
para poderse ofrecer
[MI] [FA#m] - [MI]
como Pan a nuestro hambre.

[FA#m] [RE]
Mi Cuerpo es esto (soy Yo),
[MI]
mi Sangre es esta (soy Yo),
[FA#m]
que por ustedes doy.
[FA#m] [RE]
Coman y beban (soy Yo),
[MI]
crean y vivan (soy Yo),
[FA#m] - [MI]
que para siempre soy.
[RE] [MI] [FA#m]
¡Soy Yo, soy Yo!

Se multiplicó tu amor, se partió,
todos saciados aun sobraba.
Se mostró tu intimidad, eres pan
que sólo vive por donarse.
Noche de Jerusalén,
Cristo Pan entrégate,
eres tú nuestro cordero.
Cena, huerto, beso y cruz
y tu entrega Pan Jesús
fue más fuerte que el madero.`
    },
    {
        title: "El plan de la mariposa",
        content: `Intro: [SOLm] | [DO] | [FA] | [SIb]

[SOLm] [DO]
Puede ser como lo vi
[FA] [SIb]
O tal vez como decidí mirar
[SOLm] [DO] [DO] [FA] [SIb] [SOLm]
Nada puede perdurar a excepción de la transformación

[FA] [SIb]
¿Cuándo fue la última vez que sonreíste de tan solo recordar?
[SOLm] [DO] [FA] [SIb]
Una mano que llegó, un tatuaje de luz que te eleva

[SOLm] [DO]
Y es algo tan raro
[LA7] [REm]
Sentir que la vida acelera
[SOLm] [DO] [DO]
Y que lo más preciado
[SOLm]
Es amar y ser amado

[SOLm] [DO]
Y es algo tan raro
[LA7] [REm]
Sentir que la vida acelera
[SOLm] [DO] [DO]
Y que lo más preciado
[SOLm]
Es amar y el resto

[SOLm] [DO]
Llega
[FA] [SIb]
Llega
[SOLm] [DO]
Llega
[FA] [SIb]
Llega

[SOLm] [DO]
Puede ser como lo vi
[FA] [SIb]
O tal vez como decidí mirar
[SOLm] [DO]
Nada puede perdurar
[FA] [SIb]
A excepción de la transformación

[SOLm] [DO]
Es humilde perdonar
[FA] [SIb]
Y egoísta enquistarse en el rencor
[SOLm] [DO]
El espejo me encontró
[FA] [SIb]
Batallando con mi propia confusión

[SOLM] [DO]
Y es algo tan raro
[LA7] [REm]
Sentir que la vida acelera
Y que lo más preciado...`
    }
];
    // Agrega aquí las demás canciones separadas por comas...
];

// Variables de estado
let currentFontSize = 16;
const songContentEl = document.getElementById('song-content');
const songListEl = document.getElementById('song-list');
const searchInput = document.getElementById('search-input');
const indexView = document.getElementById('index-view');
const songView = document.getElementById('song-view');

// Inicializar la aplicación
function init() {
    renderIndex(songs);
    
    // Evento de búsqueda
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = songs.filter(s => s.title.toLowerCase().includes(term));
        renderIndex(filtered);
    });

    // Evento volver
    document.getElementById('back-btn').addEventListener('click', () => {
        songView.classList.remove('active');
        songView.classList.add('hidden');
        indexView.classList.remove('hidden');
        indexView.classList.add('active');
        window.scrollTo(0, 0);
    });
}

// Renderizar el índice alfabético
function renderIndex(songsToRender) {
    songListEl.innerHTML = '';
    
    // Ordenar alfabéticamente ignorando los números del inicio
    const sortedSongs = [...songsToRender].sort((a, b) => {
        const titleA = a.title.replace(/^\d+\.\s*/, '').toLowerCase();
        const titleB = b.title.replace(/^\d+\.\s*/, '').toLowerCase();
        return titleA.localeCompare(titleB);
    });

    let currentLetter = '';

    sortedSongs.forEach(song => {
        // Obtener la primera letra del título (ignorando el número)
        const cleanTitle = song.title.replace(/^\d+\.\s*/, '');
        const firstLetter = cleanTitle.charAt(0).toUpperCase();

        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            const letterGroup = document.createElement('div');
            letterGroup.className = 'letter-title';
            letterGroup.textContent = currentLetter;
            songListEl.appendChild(letterGroup);
        }

        const item = document.createElement('div');
        item.className = 'song-item';
        item.textContent = song.title;
        item.onclick = () => openSong(song);
        songListEl.appendChild(item);
    });
}

// Abrir una canción
function openSong(song) {
    document.getElementById('song-title').textContent = song.title;
    
    // Procesar los acordes (cambiar [C] por <span>C</span>)
    const formattedContent = song.content.replace(/\[(.*?)\]/g, '<span class="chord">$1</span>');
    songContentEl.innerHTML = formattedContent;

    // Cambiar de vista
    indexView.classList.remove('active');
    indexView.classList.add('hidden');
    songView.classList.remove('hidden');
    songView.classList.add('active');
    
    // Resetear tamaño de fuente
    currentFontSize = 16;
    updateFontSize();
    window.scrollTo(0, 0);
}

// Cambiar tamaño de la letra
function changeFontSize(change) {
    currentFontSize += change;
    if (currentFontSize < 12) currentFontSize = 12; // Tamaño mínimo
    if (currentFontSize > 32) currentFontSize = 32; // Tamaño máximo
    updateFontSize();
}

function updateFontSize() {
    songContentEl.style.fontSize = `${currentFontSize}px`;
}

// Iniciar
init();
