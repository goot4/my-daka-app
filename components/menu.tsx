'use client';

import {CheckBadgeIcon, PresentationChartBarIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import clsx from "clsx";
import {usePathname} from "next/navigation";

export default function Menu(){
  const pathname = usePathname();
  const isActive0 = pathname === '/'
  const isActive1 = pathname === '/myStatistics'
  return (
    <div
      className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-2 mx-auto font-medium">
        <Link href={"/"}
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <CheckBadgeIcon className={clsx("w-8 h-8 group-hover:text-blue-600 dark:group-hover:text-blue-500",
            {'text-gray-500': !isActive0, 'dark:text-gray-400': !isActive0,
              'text-blue-600': isActive0, 'dark:text-blue-500': isActive0})}/>
          <span
            className={clsx("text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500",
              {'text-gray-500': !isActive0, 'dark:text-gray-400': !isActive0,
                'text-blue-600': isActive0, 'dark:text-blue-500': isActive0})}>打卡</span>
        </Link>
        <Link href={"/myStatistics"}
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <PresentationChartBarIcon className={clsx("w-8 h-8 group-hover:text-blue-600 dark:group-hover:text-blue-500",
            {'text-gray-500': !isActive1, 'dark:text-gray-400': !isActive1,
              'text-blue-600': isActive1, 'dark:text-blue-500': isActive1})}/>
          <span
            className={clsx("text-sm group-hover:text-blue-600 dark:group-hover:text-blue-500",
              {'text-gray-500': !isActive1, 'dark:text-gray-400': !isActive1,
                'text-blue-600': isActive1, 'dark:text-blue-500': isActive1})}>统计</span>
        </Link>
      </div>
    </div>

  )
}