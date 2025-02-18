import { classNames } from "../util/classes";
import * as Icons from "./index";
import "./AllIcons.css";
import React from "react";

interface IconsOrFolder {
  [key: string]:
    | React.ComponentType<React.SVGProps<SVGSVGElement>>
    | IconsOrFolder;
}

export const AllIcons: React.FC<{
  containerClassName?: string;
  iconClassName?: string;
}> = ({ containerClassName, iconClassName }) => {
  return (
    <div
      className={classNames(
        "ink:flex ink:flex-wrap ink:gap-2 ink:text-text-default",
        containerClassName
      )}
    >
      <div className="ink:text-body-2-bold">Click to copy icon name</div>
      <IconsOrFolder
        title="InkIcon"
        iconsOrFolder={Icons}
        iconClassName={classNames("tooltip-on-hover", iconClassName)}
      />
    </div>
  );
};

function IconsOrFolder({
  title,
  iconsOrFolder,
  iconClassName,
}: {
  title: string;
  iconsOrFolder: IconsOrFolder;
  iconClassName?: string;
}) {
  return (
    <div className={classNames("ink:flex ink:flex-col ink:gap-2 ink:pl-2")}>
      <div className="ink:text-caption-1-bold ink:text-text-muted">{title}</div>

      <div className="ink:flex ink:flex-wrap ink:gap-2">
        {Object.entries(iconsOrFolder).map(([name, IconOrFolder]) => {
          if (!isIconFolder(IconOrFolder)) {
            return (
              <div
                key={name}
                className="tooltip-on-hover ink:cursor-pointer ink:whitespace-nowrap"
                data-title={`<${title}.${name} />`}
                onClick={() =>
                  navigator.clipboard.writeText(`<${title}.${name} />`)
                }
              >
                <IconOrFolder
                  className={classNames("ink:size-4", iconClassName)}
                />
              </div>
            );
          }
        })}
      </div>

      {Object.entries(iconsOrFolder).map(([name, IconOrFolder]) => {
        if (isIconFolder(IconOrFolder)) {
          return (
            <IconsOrFolder
              key={name}
              title={`${title}.${name}`}
              iconsOrFolder={IconOrFolder}
              iconClassName={iconClassName}
            />
          );
        }
      })}
    </div>
  );
}

function isIconFolder(icon: IconsOrFolder[string]): icon is IconsOrFolder {
  return typeof icon === "object";
}
