import { useState } from "react";

import { ChevronDown } from "~/components/chevron-down";
import { ChevronLeft } from "~/components/chevron-left";
import { ChevronRight } from "~/components/chevron-right";
import { Discord } from "~/components/discord";
import { Instagram } from "~/components/instagram";
import { Lock } from "~/components/lock";
import { Minecraft } from "~/components/minecraft";
import { Reddit } from "~/components/reddit";
import { Search } from "~/components/search";
import { Tiktok } from "~/components/tiktok";
import { Twitter } from "~/components/twitter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "~/components/ui/select";

const dropdowns = [
  {
    icon: <Instagram />,
    name: "instagram",
    label: "Instagram",
  },
  {
    icon: <Discord />,
    name: "discord",
    label: "Discord",
  },
  {
    icon: <Minecraft />,
    name: "minecraft",
    label: "Minecraft",
  },
  {
    icon: <Twitter />,
    name: "twitter",
    label: "Twitter",
  },
  {
    icon: <Tiktok />,
    name: "tiktok",
    label: "Tiktok",
  },
];

export default function Profile() {
  return (
    <section className="mb-[300px]">
      <div className="mt-24 mx-4 sm:mt-[111px] sm:mx-[100px] p-4 bg-lightgray border-[0.5px] border-lightgrayborder flex flex-col sm:flex-row gap-4">
        <div className="flex sm:flex-1 flex-col gap-4">
          {dropdowns.map((dropdown) => (
            <div className="flex gap-2" key={dropdown.name}>
              <Dropdown options={dropdowns} defaultOption={dropdown} />

              <input
                type="text"
                name={dropdown.name}
                className="flex-1 rounded-[5px] p-[10px] leading-[14px] tracking-[0.5px] text-white border-[0.5px] border-lightgrayborder bg-lightergray text-sm font-medium"
                placeholder="@username"
              />
            </div>
          ))}
        </div>
        <div className="flex sm:flex-1 flex-col gap-4">
          {dropdowns.map((dropdown) => (
            <div
              className=" border-[0.5px] border-lightgrayborder relative"
              key={dropdown.name}
            >
              <div className="flex gap-2 blur-[8px]">
                <div className="flex-1 flex items-center p-[10px] justify-between gap-2 border border-lightgrayborder">
                  {dropdown.icon}
                  <p className="flex-1 text-sm font-bold text-white tracking-[0.2px]">
                    {dropdown.label}
                  </p>
                  <ChevronDown />
                </div>
                <input
                  type="text"
                  disabled
                  name={dropdown.name}
                  className="flex-1 rounded-[5px] p-[10px] leading-[14px] tracking-[0.5px] text-white border-[0.5px] border-lightgrayborder bg-lightergray text-sm font-medium"
                  placeholder="@username"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full px-3 py-[6px] border border-purple flex items-center justify-center gap-1">
                  <p className="text-[9px] font-bold text-purple">UNLOCK</p>
                  <Lock />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6">
        <button
          type="button"
          className="rounded-full px-4 py-3 w-fit bg-purple mx-auto flex items-center justify-center gap-2"
        >
          <p className="text-white text-sm font-bold tracking-[0.5px] leading-none">
            SNOOP
          </p>
          <Search />
        </button>
      </div>

      <div className="pt-[60px] mx-4 sm:mx-[100px]">
        <p className="text-2xl font-semibold leading-[19px] tracking-[-0.36px] text-white">
          Changes since last snoop
        </p>
        <p className="pt-2 text-sm leading-[14px] tracking-[0.5px] text-gray">
          Updates since last snoop on may 12th 2023 10pm
        </p>

        <div className="flex pt-6 gap-[6px] overflow-x-auto -mx-4 pl-4 no-scrollbar">
          {cards.map((card) => (
            <div key={card.title} className="last-of-type:pr-4">
              <Card
                icon={card.icon}
                title={card.title}
                desc={card.desc}
                detail={card.detail}
              />
            </div>
          ))}
        </div>

        <div className="pt-10 flex items-center gap-4 sm:mx-3">
          <p className="pr-2 text-base leading-[14.4px] tracking-[0.7px] text-white font-medium">
            Filter
          </p>
          <button
            type="button"
            className="bg-lightgray border-[0.5px] border-lightgrayborder text-white px-3 py-[6px] text-sm font-bold tracking-[0.2px]"
          >
            Daily
          </button>
          <button
            type="button"
            className="bg-purple border-[0.5px] border-purple text-white px-3 py-[6px] text-sm font-bold tracking-[0.2px]"
          >
            Weekly
          </button>
          <button
            type="button"
            className="bg-lightgray border-[0.5px] border-lightgrayborder text-white px-3 py-[6px] text-sm font-bold tracking-[0.2px]"
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="mx-4 sm:mx-[100px] sm:hidden flex items-center justify-between pt-6">
        <ChevronLeft />
        <ChevronRight />
      </div>

      <div className="pt-6 flex pl-4 sm:pl-0 sm:mx-[100px] gap-[10px]">
        <div className="hidden sm:block">
          <ChevronLeft />
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-[10px]">
          <div className="flex flex-col gap-[6px]">
            <div className="min-w-[150px] mb-[2px] px-3 py-1 border border-lightgrayborder flex items-center justify-center">
              <p className="text-white font-bold text-sm tracking-[0.2px]">
                Mon 27.04.2023
              </p>
            </div>
            <Card icon={<Twitter />} title="Twitter" desc="Made a tweet" />
            <Card icon={<Discord />} title="Discord" desc="Avatar change" />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="min-w-[150px] mb-[2px] px-3 py-1 border border-purple bg-purple flex items-center justify-center">
              <p className="text-white font-bold text-sm tracking-[0.2px]">
                Tue 28.04.2023
              </p>
            </div>
            <Card icon={<Twitter />} title="Twitter" desc="Made a tweet" />
            <Card
              icon={<Minecraft />}
              title="Minecraft"
              desc="+680 Hypixel EXP"
            />
            <Card icon={<Tiktok />} title="Twitter" desc="Added a new video" />
            <Card icon={<Reddit />} title="Reddit" desc="+5 Upvotes" />
            <Card icon={<Instagram />} title="Instagram" desc="-9 Followers" />
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="min-w-[150px] mb-[2px] px-3 py-1 border border-lightgrayborder flex items-center justify-center">
              <p className="text-lightgrayborder font-bold text-sm tracking-[0.2px]">
                Wed 29.04.2023
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="min-w-[150px] mb-[2px] px-3 py-1 border border-lightgrayborder flex items-center justify-center">
              <p className="text-lightgrayborder font-bold text-sm tracking-[0.2px]">
                Thu 30.04.2023
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="min-w-[150px] mb-[2px] px-3 py-1 border border-lightgrayborder flex items-center justify-center">
              <p className="text-lightgrayborder font-bold text-sm tracking-[0.2px]">
                Fri 01.05.2023
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="min-w-[150px] mb-[2px] px-3 py-1 border border-lightgrayborder flex items-center justify-center">
              <p className="text-lightgrayborder font-bold text-sm tracking-[0.2px]">
                Sat 02.05.2023
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[6px] pr-4 sm:pr-0">
            <div className="min-w-[150px] sm:min-w-[200px] mb-[2px] px-3 py-1 border border-lightgrayborder flex items-center justify-center">
              <p className="text-lightgrayborder font-bold text-sm tracking-[0.2px]">
                Sun 03.05.2023
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <ChevronRight />
        </div>
      </div>
      <button
        type="button"
        className="my-[60px] w-fit mx-4 sm:mx-[100px] border border-purple p-3 text-purple text-[11px] font-bold tracking-[0.55px] uppercase rounded-full"
      >
        Clear socials and timeline history
      </button>
    </section>
  );
}

const Card = ({
  icon,
  title,
  desc,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  detail?: string;
}) => (
  <div className="min-w-[150px] sm:min-w-[200px] px-4 py-3 flex flex-col gap-2 bg-lightgray border-[0.5px] border-lightgrayborder">
    <div className="flex gap-2 items-center">
      {icon}
      <p className="text-base font-bold text-white tracking-[0.24px]">
        {title}
      </p>
    </div>
    <p className="text-base leading-[16.8px] tracking-[0.6px] text-white">
      {desc}
    </p>
    {detail ? (
      <p className="text-sm text-gray leading-[14px] tracking-[0.5px]">
        {detail}
      </p>
    ) : null}
  </div>
);

const cards = [
  {
    icon: <Twitter />,
    title: "Twitter",
    desc: "+4 Followers",
    detail: "Sat 25.04.2023",
  },
  {
    icon: <Minecraft />,
    title: "Minecraft",
    desc: "+680 Hypixel EXP",
    detail: "Sat 25.04.2023",
  },
  {
    icon: <Tiktok />,
    title: "TikTok",
    desc: "Added a new video",
    detail: "Sat 25.04.2023",
  },
  {
    icon: <Reddit />,
    title: "Reddit",
    desc: "+5 upvotes",
    detail: "Sat 25.04.2023",
  },
  {
    icon: <Instagram />,
    title: "Instagram",
    desc: "-9 Followers",
    detail: "Sat 25.04.2023",
  },
];

type Option = (typeof dropdowns)[number];

const Dropdown = ({
  options,
  defaultOption,
}: {
  options: Option[];
  defaultOption: Option;
}) => {
  const [option, setOption] = useState(defaultOption);
  return (
    <Select
      value={option.name}
      onValueChange={(value) => {
        const newOption = options.find((option) => option.name === value);
        if (newOption) {
          setOption(newOption);
        }
      }}
    >
      <SelectTrigger className="w-[180px]">
        {option.icon}
        <p className="flex-1 text-sm font-bold text-white tracking-[0.2px] text-left">
          {option.label}
        </p>
        <ChevronDown />
      </SelectTrigger>
      <SelectContent sideOffset={8}>
        {options.map((option) => (
          <SelectItem value={option.name} key={option.name}>
            <div className="flex gap-2" key={option.name}>
              {option.icon}
              <p className="flex-1 text-sm font-bold text-white tracking-[0.2px]">
                {option.label}
              </p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
