/* eslint-disable @typescript-eslint/no-use-before-define,max-len */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ForwardedRef, forwardRef, MouseEventHandler, ReactNode, useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { DeepReadonly } from 'ts-essentials'
import { desktop, mobile } from '../media-queries'

const Hamburger = styled.button`

`

const NavBarContainer = styled.header`
	background-color: var(--color-brand-2-900);
	color: var(--color-grays-000);
	display: flex;
	align-items: center;
	padding: 2em;

	font-family: Roboto;
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 1.5;

	${mobile} {
		height: 64px;
		position: relative;
	}

	${desktop} {
		height: 110px;
	}
`

const MenuContainer = styled.menu<{ readonly isOpen: boolean }>`
	${mobile} {
		header > & {
			position: absolute;
			left: 0px;
			top: 100%;
			background-color: var(--color-brand-2-900);
			width: 100%;
		}

		header > menu & {
			display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
			flex-direction: column;
			align-items: stretch;
			margin-left: 1em;
		}
	}

	${desktop} {
		header > & {
			display: flex;
			align-items: center;
			gap: 1em;
		}

		header > menu & {
			position: absolute;
			top: 100%;
			display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
			flex-direction: column;
			align-items: stretch;
			background-color: var(--color-brand-2-900);
			border: solid 2px var(--color-grays-300);
			border-radius: 3px;
		}
	}
`

const MenuItemContainer = styled.li`
	display: block;

	${desktop} {
		position: relative;

		header > menu > & {
		}

		header > menu > li > menu & {
			:not(:first-child) {
				border-top: solid 2px var(--color-grays-300);
			}
		}
	}
`

const MenuItemLinkContainer = styled.a<{ readonly showArrow: boolean }>`
	color: var(--color-grays-000);
	cursor: pointer;
	display: flex;
	align-items: center;
	padding: 0em 1em;
	gap: 1em;
	height: 3em;
	// line-height: 1.1875em;

	${({ showArrow }) => !showArrow ? css`` : css`
		::after {
			line-height: 0;
			content: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMCAwTDUgNkwxMCAwSDBaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+");
		}
	`}

	${mobile} {
	}

	${desktop} {
		header > menu > li > & {
			border: solid 2px var(--color-grays-300);
			border-radius: 3px;
		}

		header > menu > li > menu & {
		}
	}
`

interface MenuItemLinkProps {
	readonly icon?: string
	readonly label: string
	readonly showArrow?: boolean
	readonly onClick?: MouseEventHandler
}

const MenuItemLink = ({ icon, label, showArrow = false, onClick }: MenuItemLinkProps) => <MenuItemLinkContainer showArrow={showArrow} onClick={onClick}>
	{icon === undefined ? undefined : <img src={icon}/>}
	{label}
</MenuItemLinkContainer>

const MenuItem = ({ icon, label, subitems = [] }: MenuItemDef) => {
	if (subitems.length === 0) {
		return <MenuItemContainer>
			<MenuItemLink icon={icon} label={label}/>
		</MenuItemContainer>
	} else {
		const [isOpen, setIsOpen] = useState(false)

		const insideRef = useDetectClickOutside({
			onTriggered: () => setIsOpen(false),
		})

		return <MenuItemContainer ref={insideRef}>
			<MenuItemLink icon={icon} label={label} showArrow={true} onClick={() => setIsOpen(!isOpen)}/>
			<Menu isOpen={isOpen} items={subitems}/>
		</MenuItemContainer>
	}
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const Menu = forwardRef(({ isOpen, items }: { readonly isOpen: boolean, readonly items: readonly MenuItemDef[] }, ref: ForwardedRef<HTMLElement>) => <MenuContainer ref={ref} isOpen={isOpen}>
	{items.map(item => <MenuItem key={item.label} {...item}/>)}
</MenuContainer>)


export interface MenuItemDef {
	readonly icon?: string
	readonly label: string
	readonly subitems?: readonly MenuItemDef[]
}

export interface NavBarProps {
	readonly menuItems?: readonly MenuItemDef[]
	readonly children: DeepReadonly<ReactNode>
}

const NavBar = ({ menuItems = [], children }: NavBarProps) => <NavBarContainer>
	{children}
	<Hamburger><img src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAgMlYwSDBWMkgyMFpNMjAgNlY4SDBWNkgyMFpNMjAgMTJWMTRIMFYxMkgyMFoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4="/></Hamburger>
	{menuItems.length === 0 ? undefined : <Menu isOpen={true} items={menuItems}/>}
</NavBarContainer>

export default NavBar
