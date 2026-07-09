import { ReactNode } from 'react';

import { ChevronRight, Code2 } from 'lucide-react';

import { WORDS, words } from '@/constants/languages';
import { ZINDEX } from '@/constants/zIndex';
import { cn } from '@/lib/utils';
import { useComponentStore } from '@/stores/component/store';
import { useProjectsStore } from '@/stores/projects/store';
import { EnumValues } from '@/types/common';
import { capitalize } from '@/utils/string';

import { TOPIC } from '../constant';

const list: Record<
  EnumValues<typeof TOPIC>,
  (
    | {
        id: string;
        companyLogo?: ReactNode;
        companyName: string;
        projectName: string;
        projectDetails?: Record<string, unknown>;
      }
    | never
  )[]
> = {
  [TOPIC.KODA]: [
    {
      id: 'koda-trimegah',
      companyName: 'Koda',
      projectName: 'TrimaPlus Trading App',
      projectDetails: {
        outsourced_by: 'Trimegah',
        duration: 'October 2023 - August 2024',
        contributions: [
          'Engineered a cross-platform desktop trading app using Tauri (Rust + React) supporting 2 asset classes: stocks and mutual funds.',
          'Built real-time orderbook and buy/sell/amend/withdraw order flows with 4 order validity types (Day, GTD, GTC, advanced order) via NATS WebSocket.',
          'Delivered mutual fund features across 3 transaction types: buy, sell, and switch orders with NAV-based calculations and order history.',
          'Optimized live data streaming performance by improving NATS reconnection logic and reducing orderbook table re-render on high-frequency ticks.',
        ],
      },
    },
    {
      id: 'koda-hukumku',
      companyName: 'Koda',
      projectName: 'Hukumku Web Platform',
      projectDetails: {
        outsourced_by: 'Hukumku',
        duration: 'July 2023 - October 2023',
        contributions: [
          'Built 5 core user flows: registration, OTP verification, KYC document upload, profile settings, and home dashboard for a legal tech platform.',
          'Developed a notification system and verification status flow handling 3 user states: pending, approved, and rejected.',
          'Delivered full mobile-responsive layout across all pages with SASS and React Router v6.',
        ],
      },
    },
    {
      id: 'koda-infinid',
      companyName: 'Koda',
      projectName: 'infinID HELOC Web',
      projectDetails: {
        outsourced_by: 'infinID',
        duration: 'December 2022 - July 2023',
        contributions: [
          'Developed a 7-step multi-step HELOC loan application flow covering pre-qualification, property, income, identity, and document submission.',
          'Integrated 3 third-party services — VIDA biometric selfie, Brankas open banking, and Google Maps autocomplete — into a single application form.',
          'Built a custom file uploader supporting multi-document upload, PDF preview, and mobile camera capture with format and size validation.',
          'Implemented Facebook Pixel and Google Analytics tracking across all public-facing pages.',
        ],
      },
    },
    {
      id: 'koda-last-mile',
      companyName: 'Koda',
      projectName: 'Kargo Last Mile TMS',
      projectDetails: {
        outsourced_by: 'Kargo',
        duration: 'January 2022 - October 2022',
        contributions: [
          'Maintained a last-mile TMS handling shipment routing, delivery orders, and transporter/fleet/driver profiles across 200+ commits over a 9-month engagement.',
          'Implemented payables and receivables modules with multi-tab Delivery Order review, payment action flows, and adjustment forms covering 3 transporter payment types (dedicated, on-call, shipper).',
          'Built bulk CSV upload/download for 5 data entities (routing, transporter, fleet, driver, contract) with validation and error handling.',
          'Wrote unit tests for payable modules using React Testing Library, contributing to a test-coverage CI pipeline.',
        ],
      },
    },
  ],
  [TOPIC.PERSONAL]: [],
};
export const List: React.FC = () => {
  const { language } = useComponentStore((state) => state);
  const { topic } = useProjectsStore((state) => state);

  if (!list[topic].length) {
    return (
      <div className="w-full h-[81%] bg-black flex items-center justify-center overflow-scroll">
        <div />
        <p className="rotate-45 font-mono text-red-500 text-6xl">
          {words[WORDS.EMPTY][language]}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-[81%] overflow-scroll">
      {list[topic].map(({ id, companyName, projectName, projectDetails }) => {
        return (
          <details
            key={id}
            className="group [&_summary::-webkit-details-marker]:hidden details-content:max-h-0 details-content:opacity-0 details-content:-translate-y-5 details-content:overflow-hidden details-content:transition-[max-height,opacity,content-visibility,translate] details-content:duration-500 details-content:ease-in-out details-content:transition-discrete open:details-content:max-h-[50%] open:details-content:opacity-100 open:details-content:translate-y-0">
            <summary
              className={cn(
                'flex justify-between items-center w-full py-1.5 px-2 mb-2 transition-[margin-bottom] duration-500 bg-[#403f3f] group-open:mb-0 group-open:sticky group-open:top-0 ',
                `group-open:${ZINDEX.PROJECT_SUMMARY}`,
              )}>
              {/* Company Name */}
              <div className="flex gap-2">
                <ChevronRight className="text-amber-300 animate-pulse transition-transform duration-300 group-open:rotate-90" />
                <h5 className="text-sm text-[#a5a4a4]">{companyName}</h5>
              </div>

              {/* Project Name  */}
              <h5 className="text-md text-white font-bold">{projectName}</h5>
            </summary>
            {/* Collapsible Content */}
            <div className="w-full bg-black mb-2 ml-0 mr-5 px-1 py-2 pl-4">
              {Object.keys(projectDetails || {})?.map((label, idx) => {
                const detailsId = `${id}-${label}-${idx}`;
                const isValueArr = Array.isArray(projectDetails?.[label]);
                const value = String(projectDetails?.[label]) || '-';
                return (
                  <div
                    key={detailsId}
                    className="w-full mb-2 md:grid md:grid-cols-24 md:gap-2 md:m-0">
                    {/* Label */}
                    <div className="w-full md:col-span-10 md:flex md:justify-between">
                      <label className="text-md font-semibold text-vc-term-bright-cyan">
                        {capitalize(label, { split: '_' })}
                      </label>
                      <span className="text-md font-semibold text-vc-func-arg opacity-0 md:opacity-100">
                        :
                      </span>
                    </div>
                    {/* Value */}
                    {isValueArr ? (
                      <ul>
                        {(projectDetails?.[label] as string[])?.map((el, i) => {
                          return (
                            <div
                              key={`${detailsId}-${i}`}
                              className="flex gap-2">
                              <Code2 className="size-10 text-[#C0392B]" />
                              <li className="mb-1">
                                <p className="w-full text-md text-white">
                                  {el}
                                </p>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    ) : (
                      <p className="w-full text-md text-white md:col-span-14">
                        {value}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </details>
        );
      })}
    </div>
  );
};
