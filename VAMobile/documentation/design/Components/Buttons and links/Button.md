---
title: Button
---

A button draws attention to important actions with a large selectable surface.

## Examples

### Default

#### Primary
**Open in**: [Storybook](https://department-of-veterans-affairs.github.io/va-mobile-library/?path=/docs/button--primary)  |   [Figma](https://www.figma.com/file/QVLPB3eOunmKrgQOuOt0SU/%F0%9F%93%90-DesignLibrary2.0---VAMobile?type=design&node-id=10569-16679&mode=design&t=Os8aP9kEAvkcrH1D-4)
<iframe width="620" height="" alt="Image of component in Storybook" src="https://department-of-veterans-affairs.github.io/va-mobile-library/?path=/story/button--primary&full=1&shortcuts=false&singleStory=true" allowfullscreen></iframe>

#### Secondary
**Open in**: [Storybook](https://department-of-veterans-affairs.github.io/va-mobile-library/?path=/docs/button--secondary)  |   [Figma](https://www.figma.com/file/QVLPB3eOunmKrgQOuOt0SU/%F0%9F%93%90-DesignLibrary2.0---VAMobile?type=design&node-id=10569-16679&mode=design&t=Os8aP9kEAvkcrH1D-4)
<iframe width="620" height="" alt="Image of component in Storybook" src="https://department-of-veterans-affairs.github.io/va-mobile-library/?path=/story/button--secondary&full=1&shortcuts=false&singleStory=true" allowfullscreen></iframe>

### Base

#### Primary
**Open in**: [Storybook](https://department-of-veterans-affairs.github.io/va-mobile-library/?path=/docs/button--base)  |   [Figma](https://www.figma.com/file/QVLPB3eOunmKrgQOuOt0SU/%F0%9F%93%90-DesignLibrary2.0---VAMobile?type=design&node-id=10569-16679&mode=design&t=Os8aP9kEAvkcrH1D-4)
<iframe width="620" height="" alt="Image of component in Storybook" src="https://department-of-veterans-affairs.github.io/va-mobile-library/?path=/story/button--base&full=1&shortcuts=false&singleStory=true" allowfullscreen></iframe>

#### Secondary
**Open in**: [Storybook](https://department-of-veterans-affairs.github.io/va-mobile-library/?path=/docs/button--base-secondary)  |   [Figma](https://www.figma.com/file/QVLPB3eOunmKrgQOuOt0SU/%F0%9F%93%90-DesignLibrary2.0---VAMobile?type=design&node-id=10569-16679&mode=design&t=Os8aP9kEAvkcrH1D-4)
<iframe width="620" height="" alt="Image of component in Storybook" src="https://department-of-veterans-affairs.github.io/va-mobile-library/?path=/story/button--base-secondary&full=1&shortcuts=false&singleStory=true" allowfullscreen></iframe>

### Destructive
**Open in**: [Storybook](https://department-of-veterans-affairs.github.io/va-mobile-library/?path=/docs/button--destructive)  |   [Figma](https://www.figma.com/file/QVLPB3eOunmKrgQOuOt0SU/%F0%9F%93%90-DesignLibrary2.0---VAMobile?type=design&node-id=10569-16679&mode=design&t=Os8aP9kEAvkcrH1D-4)
<iframe width="620" height="" alt="Image of component in Storybook" src="https://department-of-veterans-affairs.github.io/va-mobile-library/?path=/story/button--destructive&full=1&shortcuts=false&singleStory=true" allowfullscreen></iframe>

## Usage
[Refer to the VA Design System for usage guidance](https://design.va.gov/components/button/)

### Choosing between variations
* **Use primary for the most important action**. Use the primary button for the most important action that you want the user to take on the page, or in a section.
* **Use secondary for non-primary actions**. Use secondary buttons for any actions that need to be downplayed against other actions on the page, or in a section.
* **Use destructive for actions that have serious consequences**. Use destructive buttons for any actions that cannot be reversed and may result in data loss.
* **Choosing between colors**
    * In most cases, use the default (blue) color.
	* If the default (blue) color will not work (i.e. insufficient color contrast), you may use the base (gray) button.

### Placement
* Buttons generally appear on their own line at the bottom of a form or section.
* Primary buttons usually appear first, or to the left, of a secondary button.

## Code usage
[Open Storybook](https://department-of-veterans-affairs.github.io/va-mobile-library/?path=/docs/button--base)

## Content considerations
* Refer to the [VA Design System for content considerations](https://design.va.gov/components/button#content-considerations)

## Accessibility considerations
* Guidance on using disabled buttons
    * Although VADS and USWDS have styles in place to support disabled buttons, disabled buttons are not available in the mobile app.
        * Disabled buttons are only available in VADS and USWDS to support legacy buttons that still exist on VA.gov today. These legacy use cases do not exist in the mobile app.
    * Instead of disabling a button in the mobile app, always attempt to find an alternative solution such as:
        * Providing additional context surrounding a button that tells a user what to expect when a button is tapped.
        * Allowing a user to attempt to submit a form even if an error exists in an input field (and then presenting the errors to the user to fix).
* For additional guidance, refer to the [VA Design System for accessibility considerations](https://design.va.gov/components/button/#accessibility-considerations).

## Related
* [Button - VA Design System](https://design.va.gov/components/button/)
* [Button - USWDS](https://designsystem.digital.gov/components/button/)
* [Button - HIG](https://developer.apple.com/design/human-interface-guidelines/buttons)
* [Button - Material Design](https://m3.material.io/components/buttons/guidelines)

----------

## Differences with VADS
* The Base button style exists due to mobile app specific needs in dark mode. For example: The v3 Alert component has a colored background for each variation. While working on dark mode, the mobile app team found that the Default button style did not meet color contrast requirements and clashed with the background colors. For this reason, we created a new Base button style that's based on a USWDS Base button style.
* The Destructive button style is currently used in the mobile app to cancel an appointment or remove contact information. The mobile design system team is currently investigating whether this button is required or could be replaced with the Default or Base button style.
* In Storybook, a White button style is available for use on the Login page. The mobile app team is working to remove this button in the app. Once it is removed in the app, it will be removed from Storybook. It's currently not included in this documentation or Figma to prevent designers from using it in the future.