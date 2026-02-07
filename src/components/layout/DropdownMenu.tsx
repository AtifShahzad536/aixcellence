import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { NavItem } from '../../constants/navigation'

interface DropdownItemProps {
    item: NavItem
}

const DropdownItem = memo<DropdownItemProps>(({ item }) => (
    <Link to={item.path} className="product-item">
        {item.icon && (
            <span className="product-icon">
                <item.icon size={18} />
            </span>
        )}
        <div>
            <div className="product-name-wrapper">
                <div className="product-name">{item.label}</div>
                {item.badge && <span className="soon-badge">{item.badge}</span>}
            </div>
            {item.description && <div className="product-desc">{item.description}</div>}
        </div>
    </Link>
))

DropdownItem.displayName = 'DropdownItem'

interface DropdownColumnProps {
    title?: string
    items?: NavItem[]
    badge?: string
    className?: string
}

export const DropdownColumn = memo<DropdownColumnProps>(({ title, items, badge, className }) => (
    <div className={`product-column ${className || ''}`}>
        {title && (
            <div className="product-column-title-wrapper">
                <h4 className="product-column-title">{title}</h4>
                {badge && <span className="soon-badge">{badge}</span>}
            </div>
        )}
        {items?.map((item, idx) => (
            <DropdownItem key={idx} item={item} />
        ))}
    </div>
))

DropdownColumn.displayName = 'DropdownColumn'

interface MobileDropdownColumnProps {
    title: string
    items: NavItem[]
    onLinkClick: () => void
}

export const MobileDropdownColumn = memo<MobileDropdownColumnProps>(({ title, items, onLinkClick }) => (
    <div className="mobile-submenu-section">
        <h4 className="mobile-submenu-title">{title}</h4>
        {items.map((item, idx) => (
            <Link
                key={idx}
                to={item.path}
                className="mobile-submenu-link"
                onClick={onLinkClick}
            >
                {item.icon && <item.icon size={18} />}
                <span>{item.label}</span>
                {item.badge && <span className="soon-badge">{item.badge}</span>}
            </Link>
        ))}
    </div>
))

MobileDropdownColumn.displayName = 'MobileDropdownColumn'

