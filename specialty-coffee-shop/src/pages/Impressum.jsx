import React from "react";
import Button from "../components/Button";

// Impressum-Seite mit rechtlichen Informationen

const Impressum = () => {
  return (
    <main>
      <section
        className="w-[80vw] mx-auto mb-[120px] text-primary bg-secondary p-[40px] 
                   tablet:w-[90vw] tablet:p-[20px]"
        aria-labelledby="impressum-title"
      >
        <article className="space-y-6">
          <h1 id="impressum-title" className="text-3xl font-bold mb-6 tablet:text-2xl">
            Impressum
          </h1>

          <h2 className="text-2xl font-semibold tablet:text-lg">Angaben gemäß § 5 TMG</h2>
          <address className="p-[20px] not-italic space-y-2">
            <p>Max Mustermann</p>
            <p>Musterstraße 123</p>
            <p>12345 Musterstadt</p>
            <p>Telefon: 01234 567890</p>
            <p>E-Mail: <a href="mailto:max_mustermann@gmail.com" className="underline">max_mustermann@gmail.com</a></p>
          </address>

          <h2 className="text-2xl font-semibold tablet:text-lg">Haftung für Inhalte</h2>
          <p className="max-w-full mb-5">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen 
            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, 
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf 
            eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h2 className="text-2xl font-semibold tablet:text-lg">Haftung für Links</h2>
          <p className="max-w-full mb-5">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb 
            können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist 
            stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt 
            der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung 
            nicht erkennbar.
          </p>

          <h2 className="text-2xl font-semibold tablet:text-lg">Urheberrecht</h2>
          <p className="max-w-full mb-5">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen 
            des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und 
            Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>

          <h2 className="text-2xl font-semibold tablet:text-lg">Datenschutz</h2>
          <p className="max-w-full mb-5">
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren 
            Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, 
            soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an 
            Dritte weitergegeben.
          </p>
          <p className="max-w-full mb-5">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) 
            Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht 
            möglich.
          </p>
          <p className="max-w-full mb-5">
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von 
            nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. 
            Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von 
            Werbeinformationen, etwa durch Spam-Mails, vor.
          </p>
        </article>
        <div className="mt-6 flex justify-center">
          <Button text="Zurück zu Home" link="/" aria="Zurück zu Home" />
        </div>
      </section>
    </main>
  );
};

export default Impressum;
