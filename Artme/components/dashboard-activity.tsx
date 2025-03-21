import Link from "next/link"
import { formatDistanceToNow } from "date-fns"

export function DashboardActivity({ activities }: { activities: any[] }) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-muted/30">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center flex-shrink-0">
                {activity.user.avatarUrl ? (
                  <img
                    src={activity.user.avatarUrl || "/placeholder.svg"}
                    alt={activity.user.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-bold text-gray-400">{activity.user.name.charAt(0)}</span>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <Link href={`/users/${activity.user.id}`} className="font-medium hover:underline">
                      {activity.user.name}
                    </Link>
                    <span className="text-muted-foreground"> {activity.action} </span>
                    <Link href={`/artwork/${activity.artwork.id}`} className="font-medium hover:underline">
                      {activity.artwork.title}
                    </Link>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

