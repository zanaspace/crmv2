import * as React from "react"
import { cn } from "@/lib/utils"
import * as P from "@/components/ui/primitives/table"

/**
 * CRM tables on the shadcn/ui table primitive. Same exports and class hooks as before; the card frame
 * (rounded border, card background) wraps the primitive's scroll container.
 */
const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
      <P.Table ref={ref} className={cn("w-full caption-bottom text-sm border-collapse text-left", className)} {...props} />
    </div>
  )
)
Table.displayName = "Table"

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <P.TableHeader ref={ref} className={cn("[&_tr]:border-b [&_tr]:border-[var(--border)]", className)} {...props} />
  )
)
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <P.TableBody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  )
)
TableBody.displayName = "TableBody"

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <P.TableRow
      ref={ref}
      className={cn(
        "group border-b border-[var(--border)] transition-colors hover:bg-[var(--sb-hover)] has-aria-expanded:bg-[var(--sb-hover)] data-[state=selected]:bg-[var(--accent-soft)]",
        className
      )}
      {...props}
    />
  )
)
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <P.TableHead
      ref={ref}
      className={cn(
        "h-11 px-4 text-left align-middle whitespace-nowrap font-heading text-[0.72rem] font-semibold text-[var(--muted-foreground)] uppercase tracking-wider bg-[var(--card)] border-b border-[var(--border)]",
        className
      )}
      {...props}
    />
  )
)
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <P.TableCell
      ref={ref}
      className={cn("p-4 align-middle whitespace-normal text-[0.88rem] text-[var(--foreground)]", className)}
      {...props}
    />
  )
)
TableCell.displayName = "TableCell"

/**
 * The pinned ⋯ column every list uses (same as Customers): it stays on the right edge while
 * wide tables scroll sideways, holds one RowActionsMenu, and never triggers the row's own click.
 */
const TableActionsHead = () => (
  <TableHead className="text-right sticky right-0 z-10 bg-[var(--card)] w-[60px]">
    <span className="sr-only">Actions</span>
  </TableHead>
)

const TableActionsCell = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <TableCell
    onClick={(e) => e.stopPropagation()}
    className={cn("text-right sticky right-0 z-10 bg-[var(--card)] group-hover:bg-[var(--sb-hover)] transition-colors w-[60px]", className)}
  >
    {children}
  </TableCell>
)

export {
  TableActionsHead,
  TableActionsCell,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
}
