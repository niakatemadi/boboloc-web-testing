"use client";

import { L10n, loadCldr, registerLicense } from "@syncfusion/ej2-base";
import {
  Inject,
  Month,
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
} from "@syncfusion/ej2-react-schedule";
import "../src/App.css";
import { useRef } from "react";
loadCldr(
  require("cldr-data/supplemental/numberingSystems.json"),
  require("cldr-data/main/fr-CH/ca-gregorian.json"),
  require("cldr-data/main/fr-CH/numbers.json"),
  require("cldr-data/main/fr-CH/timeZoneNames.json")
);

type fullCalendarProps = {
  carId: string;
};

registerLicense(
  "ORg4AjUWIQA/Gnt2UFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5WdE1iXXtac3NQT2lV"
);

L10n.load({
  "fr-CH": {
    recurrenceeditor: {
      count: "Count",
      daily: "Daily",
      days: "Day(s)",
      end: "End",
      every: "every",
      first: "First",
      fourth: "Fourth",
      last: "Last",
      month: "Month",
      monthly: "Monthly",
      months: "Month(s)",
      never: "Never",
      none: "None",
      on: "Repeat On",
      onDay: "Day",
      repeat: "Repeat",
      repeatEvery: "Repeat Every",
      second: "Second",
      summaryDay: "day(s)",
      summaryMonth: "month(s)",
      summaryOn: "on",
      summaryRepeat: "Repeats",
      summaryTimes: "time(s)",
      summaryUntil: "until",
      summaryWeek: "week(s)",
      summaryYear: "year(s)",
      third: "Third",
      until: "Until",
      weekly: "Weekly",
      weeks: "Week(s)",
      yearly: "Yearly",
      years: "Year(s)",
    },
    schedule: {
      day: "Jour",
      week: "Semaine",
      workWeek: "Semaine de travail",
      month: "Mois",
      agenda: "Agenda",
      today: "Aujourd'hui",
      noEvents: "Aucun événement",
      emptyContainer: "Aucun événement n'est prévu pour ce jour.",
      allDay: "Toute la journée",
      start: "Début",
      end: "Fin",
      more: "Plus",
      close: "Fermer",
      cancel: "Annuler",
      noTitle: "Sans titre",
      delete: "Supprimer",
      deleteEvent: "Supprimer un événement",
      deleteMultipleEvents: "Supprimer plusieurs événements",
      selectedItems: "Éléments sélectionnés",
      deleteSeries: "Supprimer la série",
      edit: "Éditer",
      editSeries: "Éditer la série",
      editEvent: "Modifier l'événement",
      createEvent: "Créer",
      subject: "Sujet",
      addTitle: "Ajouter un titre",
      moreDetails: "Plus de détails",
      save: "Sauvegarder",
      editContent:
        "Voulez-vous modifier seulement cet événement ou toute la série?",
      deleteContent:
        "Voulez-vous supprimer seulement cet événement ou toute la série?",
      deleteRecurrenceContent:
        "Voulez-vous supprimer seulement cet événement ou toute la série récurrente?",
      deleteFollowingEvent: "Tous les événements suivants",
      deleteFollowingSeries: "Tous les événements de la série suivante",
      editFollowingEvent: "Tous les événements suivants",
      editFollowingSeries: "Tous les événements de la série suivante",
      editRecurrence: "Modifier l'événement récurrent",
      recurrence: "Récurrence",
      recurrenceRule: "Règle de récurrence",
      "end-on": "Fin",
      "end-by": "Fin par",
      occurrences: "Occurrences",
      series: "Série",
      after: "Après",
      on: "Sur",
      every: "Chaque",
      days: "Jour(s)",
      weeks: "Semaine(s)",
      months: "Mois",
      years: "Année(s)",
      first: "Premier",
      second: "Deuxième",
      third: "Troisième",
      fourth: "Quatrième",
      last: "Dernier",
      summary: "Résumé",
      daily: "Quotidien",
      weekly: "Hebdomadaire",
      monthly: "Mensuel",
      yearly: "Annuel",

      until: "Jusqu'à",
      count: "Nombre de fois",
    },
  },
});

const FullCalendarComponent = ({ carId }: fullCalendarProps) => {
  // I think this link can help you to set french language
  //https://ej2.syncfusion.com/react/documentation/schedule/localization?_gl=1*cx4tdz*_ga*NDkxMzQxNDYzLjE3MTcyMzc2NzU.*_ga_41J4HFMX1J*MTcxNzI5NTQzNC40LjEuMTcxNzI5Njg4Ni4wLjAuMA..#globalization
  const eventSettings = {
    dataSource: {
      StartTime: new Date(2024, 5, 10),
      EndTime: new Date(2024, 5, 20),
      Subject: "Audi a1",
      Id: "11255",
    },
  };
  const today = new Date();
  const lastMonth = new Date(today.getFullYear(), today.getMonth());
  return (
    <ScheduleComponent
      width="100%"
      height="550px"
      minDate={lastMonth}
      selectedDate={new Date()}
      eventSettings={eventSettings}
      locale="fr-CH"
      popupOpen={(e: any) => {
        e.cancel = true;
      }}
    >
      <ViewsDirective>
        <ViewDirective option="Month" />
      </ViewsDirective>
      <Inject services={[Month]} />
    </ScheduleComponent>
  );
};

export default FullCalendarComponent;
